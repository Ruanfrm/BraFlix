import { Center, Container, Header} from "./contact.js";
import { useEffect, useState } from "react";
import {FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import Social from "../../components/social/index.js";

import Logo from "../../components/logo";
import "./input.css"

import {
  getDocs,
  collection,
  orderBy,
  query,
  getDoc,
  doc
} from 'firebase/firestore'
import {db} from '../../services/conectionfirebase'



export default function Contact() {
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
       <Header><Logo/></Header>

      <h1>
        Pedir Filme/Série | Sugestão
      </h1>

        <Center>
            <form action="https://formsubmit.co/06dcf652724da30e35f25d774e7177b0" method="POST">
            <input type="hidden" name="_next" value="http://localhost:3000/"/>
            <input type="hidden" name="_subject" value="Novo envio de BraFlix!"/>
            <input type="text" name="_honey" style={{display: "none"}}/>
            <input type="hidden" name="_autoresponse" value="Obrigado pela mensagem, em breve terá o retorno"/>

            <div class="input-group">
    <label class="label">Qual seu nome?</label>
    <input autocomplete="on" name="name" id="name" class="input" type="text" required />

    <label class="label">Qual o seu e-mail?</label>
    <input autocomplete="on" name="Email" id="Email" class="input" type="email" required />

    <label class="label">Qual o assunto?</label>
    <input autocomplete="off" name="subject" id="subject" class="input" type="text"  required/>

    <label class="label">Digite sua mensagem:</label>
    <input autocomplete="off" name="mensage" id="mensage" class="input" type="text" required/>
         </div>
         
                    <button>
              <div>
                <span >
                  <p>Enviar</p>
                </span>
              </div>
              <div>
                <span >
                  <p>Obrigado</p>
                </span>
              </div>
            </button>

            </form>
        </Center>

        <p className="p-footer">Feito por Ruan Freire 🇧🇷</p>

{links.length !== 0 && Object.keys(socialLinks).length > 0 && (
  <footer>
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
</footer>  
)}

    </Container>

    )
}
