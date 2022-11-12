import Social from '../../components/social'
import {FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { Container, Movie, MovieList, Title, P, Footer} from './home.js';

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


export default function Home() {


  const [links, setLinks] = useState([])
  const [socialLinks, setSocialLinks] = useState({})


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

        <Title>BraFlix 🇧🇷</Title>


        <main className='links'>

        <MovieList>
      {links.map(item => {
        return (
          <Movie key={item.id}>
            <a href={item.movie} target="_blank">
              <img src={item.image}/>
              </a>
              <span>{item.name}</span>
          </Movie>
        )
      })}
      </MovieList>
        
       

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
