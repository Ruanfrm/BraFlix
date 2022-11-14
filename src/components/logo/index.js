import './logo.css'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
        <Link to="/">
        <h1 className='logo'>Bra<span className='logo-text'>Flix</span>🇧🇷</h1>
        </Link>
    </div>
  )
}
