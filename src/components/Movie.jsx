import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {

  return <article className='movie'>
  {/* Bloque contenedor */}
  <Link to={"/details/"+movie._id} className='movie__link'>
    <img className='movie__image' src="https://t1.pixers.pics/img-c676e9e9/posters-cinema-poster-design-template.jpg?H4sIAAAAAAAAA42PSU7FMAxAr5NKbe2MTXqAv_1HqDL1U-ikpEDF6UkBsUNCXniQ_awHr2u2YwQf1yMmWKYQ5gjjNJcu9ynm6SMSrKVUVV-mM0HEqt_eYvJp20lDOa8byWrJulqhrvp3Wy4Xm17I03HsuQfIvN2ns-BK8hn8koEh7QA1SKONkV6IgD4Me5MPuwabQiPwVNju66PGK_6P1UARpAvUKacDCqcHxvCU2PwSvrAcZZHSF_pHskOsu0vuSNNCiu1Wtg_yvD8q-OPndw3lCm53UAYUBSHB6Gs03O7KKCqK4xAM03a0VHvWxYCcRyutj06hs2NA3ZYvn9u-UAeKAQAA" alt={movie.title}></img>
    <h2 className='movie__title'>{movie.title}</h2>
  </Link>
  <div className='movie__stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div>
</article>
}
