export const reviewsInitialState = {
    reviews:[]
}

export default function reviewsReducer(state,action){ //en el action quiero recibir comentario, puntuación y que acción realizar
    let newState;
    switch(action.type){
        case 'addReview':
            const {idMovie,comment} = action;
            newState = {reviews: [...state.reviews, {id:state.reviews.length,idMovie,comment}]};
            break;   
            
            default:
                newState = state; //en este caso devuelve el estado inicial sin modificar
    }

    return newState  //devuelvo el nuevo estado
}