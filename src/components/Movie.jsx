import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {

  return <article className='movie'>
  {/* Bloque contenedor */}
  <Link to={"/details/"+movie._id} className='movie__link'>
    <img className='movie__image' src={movie.img} alt={movie.title}></img>
    <h2 className='movie__title'>{movie.title}</h2>
  </Link>
  <div className='movie__stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div>
  <img className='movie__image' src={movie.img} alt={movie.title}></img>
</article>
}
