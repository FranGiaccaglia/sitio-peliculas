import React, { useContext, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { moviesContext } from '../context/MoviesContext';
import Movie from '../components/Movie';

export default function Details() {
  const {id} = useParams();
  const  {movies, reviews, addReview, loading} = useContext(moviesContext);
  const movie = movies.filter(movie=>movie._id===id)[0];
  const comentario = useRef();
  const rating = useRef();

  if(!movie){ //se retrasa la ejecución de details, pregunta si !película y !cargando ir a notfound, si no, esperar
    return <Navigate to="/notfound"/>
  }

  const add = () => {
    let comment = comentario.current.value;
    let stars = rating.current.value;  //tomo la info
    addReview(movie,stars,comment);   //paso la info
    comentario.current.value = "";
  }

  return loading?<p>Loading...</p>:<div>
    <div className='movie--details'>
      <Movie movie={movie}></Movie>
    </div>
    <p className='movie--details__p'>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<b/>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>

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
            return <p key={reviews.id} className='div--cajacomentarios__texto'>{reviews.comment}</p>
        }
        return undefined;
      })}
    </div>
  </div>
  
}
