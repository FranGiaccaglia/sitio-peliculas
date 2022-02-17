// const mockup = [{
//     id: "spiderman",
//     title: "Spider-man: No Way Home",
//     stars: 0,
//     numberOfReviews: 0,
//     img: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/11/spider-man-no-way-home-poster-oficial.jpg?resize=1080%2C1350&quality=80&ssl=1"
//   },{
//     id: "avengers",
//     title: "Avengers: ENDGAME",
//     stars: 0,
//     numberOfReviews: 0,
//     img: "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg"
//   },{
//     id: "drStrange",
//     title: "Doctor Strange",
//     stars: 0,
//     numberOfReviews: 0,
//     img: "https://m.media-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg"
//   },{
//     id: "sw",
//     title: "Star Wars: The Last Jedi",
//     stars: 0,
//     numberOfReviews: 0,
//     img: "https://www.lafosadelrancor.com/wp-content/uploads/2017/10/poster-definitivo.jpg"
//   }] //MOCKUP de prueba hasta que este el backend


export const moviesInitialState = {
    movies:[]
}

export default function moviesReducer(state,action){ //en el action quiero recibir comentario, puntuación y que acción realizar
    let newState;
    switch(action.type){
        
        case 'addStars':
            const {movie,stars} = action
            movie.stars = movie.stars + parseInt(stars)
            movie.numberOfReviews++
            newState = {movies:[...state.movies]}
            break;
        
        case 'addMovies':
            const {movies} = action
            newState = {movies}
            break;
        
        default:
            newState = state; //en este caso devuelve el estado inicial sin modificar
    }

    return newState  //devuelvo el nuevo estado
}