

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import  APIKey  from '../../services/key';
import { Container, Title } from '../details/styles';
function Details() {
    
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR && https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${APIKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview, imdb_id} = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date,
        imdb: imdb_id
    }
      setMovie(movie)
    })
  }, [id])

  

  return (
    <Container>
      <div className="movie">
      <img src={movie.image} alt={movie.title}/>
      <div className="details">
        <h1>{movie.title}</h1>
        <span>Sinopse:<br/> {movie.sinopse}</span>
        <span className='release-date'>Data de Lançamento: {movie.releaseDate}</span>
        <div><Link to="/"><button>Voltar</button></Link></div>
        
        <div>
        <a href={`https://embed.warezcdn.net/filme/${movie.imdb}`}><button>Assistir</button></a>
        </div>
        

      </div>
    </div>
  

    </Container>
  );
}

export default Details;