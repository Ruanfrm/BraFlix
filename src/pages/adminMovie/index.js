import { useEffect, useState } from 'react'
import Header from '../../components/header'
import "./adminMovie.css"
import Logo from '../../components/logo'
import Input from '../../components/input'
import {MdAddLink, MdListAlt} from 'react-icons/md'
import {FiTrash2} from 'react-icons/fi'
import {db} from '../../services/conectionfirebase'

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  

} from 'firebase/firestore'
import { toast } from 'react-toastify'


export default function AdminMovie() {
  
    const [nameInput, setNameInput] = useState("");
    const [movie, setMovie] = useState(" ");
    const [image, setImage] = useState("");
  
    const [links, setLinks] = useState([])
  
    useEffect(() => {
      const linksRef = collection(db, "filmes")
      const queryRef = query(linksRef, orderBy("created", "desc"))
  
       onSnapshot(queryRef, (snapshot) => {
  
        let lista = [];
  
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            movie: doc.data().movie,
            image: doc.data().image
          }) 
        })
  
        setLinks(lista);
  
      })
  
    }, [])
  
  async function handleRegister(e){
    e.preventDefault();
  
    if(nameInput === '' ||  movie === '' || image === '' ){
      toast.warn('Preencha todos os campos!!! ')
      return;
    }
  
    addDoc(collection(db, "filmes"), {
      name: nameInput,
      movie: movie,
      image: image,
    
      created: new Date(),
    })
    .then(() => {
      setNameInput("")
      setMovie("")
      setImage("")
      toast.success("Link cadastrado com sucesso ")
    })
    .catch((error) => {
      console.log('ERRO AO REGISTRAR' + error)
      toast.error("Ops erro ao salvar link")
    })
  }
  
     async function handleDeleteLink(id){
      const docRef = doc(db, "filmes", id)
      await deleteDoc(docRef)
      toast.success("Link deletado com sucesso!")
        
  }
  
    return (
      <div className="admin-container" >
          <Header/>
          <Logo/>
  
          <form className='form' onSubmit={handleRegister}>
              <label>Nome do filme/serie</label>
              <Input
              placeholder="Nome do Link"
              value={nameInput}
              onChange={(e) => {setNameInput(e.target.value)} }
              />
              <label>Url do filme/serie</label>
              <Input
              type="url"
              placeholder="Url do Link"
              value={movie}
              onChange={(e) => {setMovie(e.target.value)} }
              />
               <label>Url da imagem</label>
                <Input
              type="url"
              placeholder="Url do Link"
              value={image}
              onChange={(e) => {setImage(e.target.value)} }
              />
  
  
            
  
             
  
              <button className='btn-register' type='submit' >
                Cadastrar <MdAddLink size={24} color='#FFF'/>
              </button>
  
          </form>
  
          <h2 className='title'>
            Filmes cadastrados
          </h2>
  
        {links.map((item, index) => (
            <article 
            key={index}
            className='list animate-pop'
            >
              <p>{item.name}</p>
              <div >
                <button className='btn-delete' onClick={ () => handleDeleteLink(item.id)  }>
                  <FiTrash2 size={18} color="#FFF"/>
                </button>
              </div>
            </article>
        ))}
  
      </div>
    )
}
