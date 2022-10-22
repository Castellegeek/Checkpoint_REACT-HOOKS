import React from "react";


function MovieCard (props) {

    return (
        <div className="container container-border mt-8">
			<div className="card movie_card">
                <div class="card-body">
                    <iframe src = {props.movie.posterURL} frameBorder="2" 
                    title="movie" width = "225" />

                    <h5 className="card-title">
                        {props.movie.title}
                    </h5>
                    <p className="card-description">
                        {props.movie.description}
                    </p>

                </div>
                <span className="rate">{props.movie.rating}</span>
            </div>
        </div>
    );
}

export default MovieCard;