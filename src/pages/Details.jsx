import React, { useContext, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { moviesContext } from '../context/MoviesContext';
import Movie from '../components/Movie';

export default function Details() {
  const {id} = useParams();
  const  {movies, reviews, setReviews} = useContext(moviesContext);
  const movie = movies.filter(movie=>movie.id===id)[0];
  const comentario =useRef();

  if(!movie){
    return <Navigate to="/notfound"/>
  }

  const addReview = () => {
    let valueComment = comentario.current.value;
    setReviews([...reviews, {id:movie.id,valueComment}]);
  }

  return <div>
    <p>Details {id}</p>
    <Movie movie={movie}></Movie>
    
    <div>
      <input ref={comentario} type="text">Comentario</input>
      <button onClick={addReview}>Agregar review</button>
    </div>
  </div>
  
}
