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
        title: "Rice",
        description: "la véritable histoire des Antetokounmpo est un film réalisé par Akin Omotoso avec Dayo Okeniyi, Yetide Badaki. Synopsis : Emigrants nigérians ...",
        posterURL: "https://www.youtube.com/watch?v=Wrrmnm5Fl2s",
        rating: <StarRating />
    },
    {   id: 2,
        title: "le crocodile du botswanga",
        description: "Didier est un petit agent de joueurs de football. Parmi ses poulains, il compte le jeune Leslie Konda qui vient de signer son premier contrat d'attaquant avec un grand club espagnol. Cette nouvelle n'a pas échappé à Bobo Babimbi, passionné de foot et frais président du Botswanga, petit État pauvre d'Afrique centrale, le pays de la famille de Leslie. Il invite alors le jeune homme à découvrir la terre de ses ancêtres afin de le décorer.",
        posterURL: "https://www.youtube.com/watch?v=tb0phqGQqJM",
        rating: <StarRating />
    },
    {   id: 3,
        title: "Bleach",
        description: "Ichigo Kurosaki, 15 ans, arrive à voir des spectres depuis sa plus tendre enfance. Un soir, sa routine quotidienne est bouleversée suite à sa rencontre avec une shinigami : Rukia Kuchiki, et la venue d'un monstre appelé hollow. Ce dernier étant venu dévorer les âmes de sa famille et la shinigami venue le protéger, Ichigo accepte de devenir lui aussi un shinigami afin de les sauver.",
        posterURL: "https://www.allocine.fr/film/fichefilm_gen_cfilm=193624.html",
        rating: <StarRating />
    },
    {   id: 4,
        title: "American Nightmare",
        description: "American Nightmare est une série de films d'action horrifique américains réalisés par James DeMonaco pour les trois premiers films, Gerard McMurray pour le quatrième et Everardo Gout pour le cinquième. Le principal scénariste de la série est James DeMonaco lui-même.",
        posterURL: "https://www.youtube.com/watch?v=AVRk-UhPkHU",
        rating: <StarRating />
    },
    {   id: 5,
      title: "Spider-Man",
      description: "Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué et n'est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d'être un superhéros. Lorsque Peter demande de l'aide au docteur Strange, les enjeux deviennent encore plus dangereux, l'obligeant à découvrir ce que signifie vraiment être Spiderman.",
      posterURL: "https://www.imdb.com/title/tt10872600/",
      rating: <StarRating />
  },
  {   id: 6,
    title: "Scream",
    description: "Casey Becker, une belle adolescente, est seule dans la maison familiale. Elle s'apprête à regarder un film d'horreur, mais le téléphone sonne.",
    posterURL: "https://www.youtube.com/watch?v=nBx-em7bzWM",
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
