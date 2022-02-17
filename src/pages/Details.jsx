import React, { useContext, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { moviesContext } from '../context/MoviesContext';
import Movie from '../components/Movie';

export default function Details() {
  const {id} = useParams();
  const  {movies, reviews, addReview} = useContext(moviesContext);
  const movie = movies.filter(movie=>movie.id===id)[0];
  const comentario = useRef();
  const rating = useRef();

  if(!movie){
    return <Navigate to="/notfound"/>
  }

  const add = () => {
    let comment = comentario.current.value;
    let stars = rating.current.value;  //tomo la info
    addReview(movie,stars,comment);   //paso la info
    comentario.current.value = "";
  }

  return <div>
    <div className='movie--details'>
      <Movie movie={movie}></Movie>
    </div>
    <p>Details {id}</p>

    <div>
      <input className='div--comentarios' ref={comentario} type="text"></input>
      <select ref={rating}>
        <option value={1}>⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={5}>⭐⭐⭐⭐⭐</option>
      </select>
      <button className='div--comentarios__boton' onClick={add}>Agregar review</button>
    </div>

    <div className='div--cajacomentarios'>
      {reviews.map(reviews=>{
        if(reviews.idMovie===id){
            return <p className='div--cajacomentarios__texto'>{reviews.comment}</p>
        }
        return undefined;
      })}
    </div>

  </div>
  
}
