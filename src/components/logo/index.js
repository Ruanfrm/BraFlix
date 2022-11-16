import './logo.css'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
        <Link to="/">
        <h1 className='logo'>Bra<span className='logo-text'>Flix</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" /></h1> 
        </Link>
    </div>
  )
}
