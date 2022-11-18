import Social from '../../components/social'
import {FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { Container, Movie, MovieList, Title, P, Footer, Header, Navbar} from './home.js';
import Logo from '../../components/logo'
import { useEffect, useState } from 'react'
import {
  getDocs,
  collection,
  orderBy,
  query,
  getDoc,
  doc

} from 'firebase/firestore'
import {db} from '../../services/conectionfirebase'
import { Link } from 'react-router-dom';



export default function Home() {

  

  const [links, setLinks] = useState([])
  const [socialLinks, setSocialLinks] = useState({})


  const imagePath = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState([])
  const ApiKey = "2a587473bae94fad1cb5b8367a709b0c"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
    console.log(setMovies)
  }, [])





  useEffect(() => {

    function loadLinks(){
      
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("created", "desc"))

      getDocs(queryRef)
      .then( (snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            movie: doc.data().movie,
            image: doc.data().image
          })


          setLinks(lista)

        } )
      })




    }

    loadLinks();

  }, [])

 
  useEffect(() => {
    function loadSocialLinks(){
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
      .then((snapshot) => { 
        if (snapshot.data() != undefined){
          setSocialLinks({
            github: snapshot.data().github,
            instagram: snapshot.data().instagram,
            linkedin: snapshot.data().linkedin,
            twitter: snapshot.data().twitter
          })
        }
      })
    }
    loadSocialLinks();
  }, [])

 


  return (
    <Container>


        {/* <Title>BraFlix 🇧🇷</Title> */}
        <Header><Logo/></Header>

     

         {/* nav-bar */}
            <Navbar  className='nav-bar-Navbar'>
            <ul>
                    <li className='hover-underline-animation' ><a href="/movie">Filmes</a></li> 
                    <li className='hover-underline-animation' ><a href="/serie">Séries</a></li>
                    <li className='hover-underline-animation' ><a href="/contact">Contato</a></li>
            </ul>
            </Navbar>
            {/* End-nav-bar */}

                <h3 style={{textAlign: "center", marginBottom: 20, fontWeight: "bold", marginTop: 50}}>Filmes populares</h3>



            <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>


        
        <h3 style={{textAlign: "center", marginBottom: 20, fontWeight: "bold", marginTop: 50}}>Últimos adicionados</h3>



        <main className='links' >

        <MovieList>
      {links.map(item => {
        return (
          
          <Movie key={item.id}  >
            <a href={item.movie} target="_blank">
              <img src={item.image}/>
              </a>
              <span>{item.name}</span>
          </Movie>
        )
      })}
      </MovieList>

     
        
      <P>Feito por Haisenberg 🇧🇷</P>

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <Footer>
          <Social url={socialLinks?.instagram}>
            <FaInstagram size={25} color="#fff"/> 
          </Social>
          <Social url={socialLinks?.github}>
          <FaGithub size={25} color="#fff"/>
          </Social>
          <Social url={socialLinks?.twitter}>
          <FaTwitter size={25} color="#fff"/>
          </Social>
          <Social url={socialLinks?.linkedin}>
            <FaLinkedin  size={25} color="#fff"/>
          </Social>
        </Footer>  
        )}
                 

        </main>
        
    </Container>
  )
}
