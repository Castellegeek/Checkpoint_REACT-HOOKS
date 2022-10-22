import './Style.css';
import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter.jsx';
import MovieCard from './components/MovieCard';
import StarRating from './components/StarRating';
import AddMovie from './components/AddMovie';


function App() {

  const movielist = [
    {
        id: 1,
        title: "1 Hours of English Conversation Practice",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        posterURL: "https://www.youtube.com/embed/WRAXsSiStvk",
        rating: <StarRating />
    },
    {   id: 2,
        title: "You Have To Be Willing To Take The Steps",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        posterURL: "https://www.youtube.com/embed/flE0WA30f2k",
        rating: <StarRating />
    },
    {   id: 3,
        title: "Body Builders make fun of little person ft",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        posterURL: "https://www.youtube.com/embed/M39R9A3_JKA",
        rating: <StarRating />
    },
    {   id: 4,
        title: "Advanced Vocabulary Lesson",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        posterURL: "https://www.youtube.com/embed/6kCTDhW9rqQ",
        rating: <StarRating />
    },
    {   id: 5,
      title: "Stop the screts that hurt",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      posterURL: "https://www.youtube.com/embed/yq-M8oYr3lI",
      rating: <StarRating />
  },
  {   id: 6,
    title: "High security",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    posterURL: "https://www.youtube.com/embed/zuugCGVPz3U",
    rating: <StarRating />
  }
  ];

  const [movies, setMovies] = useState(movielist);

  const handleAdd = (movie) => {
    const newMovies = [...movies];
    
    newMovies.push(movie)
    setMovies(newMovies)
  }

  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    setFilter(e.target.value)
  }
  
  return (
    <div className="App"> 
        <Container>
              <Filter handleSearchMovie = {handleSearch} />
              <AddMovie />
              <MovieList movies = {movies} handleAdd = {handleAdd} />
              {movies
                .filter((movie) =>
                movie.title.toLowerCase().includes(filter.toLocaleLowerCase()))
                .sort((a, b) => b.id - a.id)
                .map((movie) => ( <MovieCard movie={movie} key={movie.id} />))}
        </Container>
    </div>
  );
}

export default App;
