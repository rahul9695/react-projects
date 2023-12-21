import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
        <div style={{background : `url(${props.bgImg})`, backgroundSize : "cover"}} className='inner-shadow'>
            <div className='movie-details'>
                <div className='main-detail-container'>
                    <div className='poster-wrapper'>
                        <img src={props.imgLink} alt="movie-poster-img" />
                    </div>
                    <div>
                        <div>
                            <h2>{props.name}</h2>
                            <p><span>{props.year}</span>, <span>{props.director}</span></p>
                        </div>
                        <div className='duration-genere'>
                            <span>{props.duration}</span>
                            <span>{props.genres}</span>
                        </div>
                    </div>
                </div>
                <p className='movie-description'>{props.description}</p>
            </div>
            <div className='icons-wrapper'>
                <i class="fa-solid fa-share-nodes fa-xl"></i>
                <i class="fa-solid fa-heart fa-xl"></i>
                <i class="fa-solid fa-comment fa-xl"></i>
            </div>
        </div>
    </div>
  )
}

export default MovieCard;