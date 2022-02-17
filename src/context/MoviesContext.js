import React, {createContext, useState} from 'react'

export const moviesContext = createContext();

const mockup = [{
  id: "spiderman",
  title: "Spider-man: No Way Home",
  stars: 0,
  numberOfReviews: 0,
  img: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/11/spider-man-no-way-home-poster-oficial.jpg?resize=1080%2C1350&quality=80&ssl=1"
},{
  id: "avengers",
  title: "Avengers: ENDGAME",
  stars: 0,
  numberOfReviews: 0,
  img: "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg"
},{
  id: "drStrange",
  title: "Doctor Strange",
  stars: 0,
  numberOfReviews: 0,
  img: "https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg"
},{
  id: "sw",
  title: "Star Wars: The Last Jedi",
  stars: 0,
  numberOfReviews: 0,
  img: "https://www.lafosadelrancor.com/wp-content/uploads/2017/10/poster-definitivo.jpg"
}] //MOCKUP de prueba hasta que este el backend


export default function MoviesContext({children}) {
  
  const [movies,setMovies] = useState(mockup);
  const [reviews, setReviews] = useState([]);

  const addReview = (movie, stars, comment) => {
    movie.stars += parseInt(stars); //suma la nueva puntuación del usuario al puntaje que ya tenía ej: cuatro users votan 5 stars y uno vota 4 stars = 5*3 = 15 + 4 = 19 stars y luego divido por la cantidad de reviews
    movie.numberOfReviews ++;
    setMovies([...movies]);
    setReviews([...reviews, {id:reviews.length,idMovie:movie.id,comment}]);
  }

  return <moviesContext.Provider value={{movies,addReview,reviews}}>
    {children}
  </moviesContext.Provider>
}
