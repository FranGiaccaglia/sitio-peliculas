import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {
  return <article className='movie'>
  {/* Bloque contenedor */}
  <Link to={"/details/"+movie.id} className='movie__link'>
    <img className='movie__image' src={movie.img} alt={movie.title}></img>
    <h2 className='movie__title'>{movie.title}</h2>
  </Link>
  <div className='movie__stars'>⭐⭐⭐⭐⭐</div>
</article>
}
