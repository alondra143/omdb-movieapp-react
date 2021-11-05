import logo from './logo.svg';
import './App.css';
import {Grid, Header} from "semantic-ui-react";
import React, { useEffect, useState } from 'react';
import Movie from "./Movie/Movie"
import SearchMovie from './SearchMovie/SearchMovie';

function App() {
  // A user can enter a title in an input in order to search for a movie
  const [movieTitle, setMovieTitle] = useState('eraserhead');
  const [movie, setMovie] = useState({});
  
  function getMovieTitle(newTitle) {
    setMovieTitle(newTitle);
    console.log(movieTitle, 'this is movie title after submit')
  }
  useEffect(() => {

    // creating a string that we're making a request to
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=76dfe25c`
    
    // now we make an API call/request to omdb
    // fetch is a built in function that is native to JS
    // when we make a fetch request, we're making a GET request to an outside server, so we have to wait for a response from the third party API
    // fetch returns a promise for us
    fetch(movieUrl)
      // DO THIS FOR EVERY FETCH REQUEST
      .then((res) => res.json()) //omdb will send back a json, so we're parsing the json from a string into a regular javascript object
      .then((data) => {
        console.log(data, '<-- this is data from omdb')
        setMovie(data) // since its already an object we can set the state to the entire object
      }, )


  }, [movieTitle]);
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color="red" textAlign="center">
          MovieApp
        </Header>
        <SearchMovie getMovieTitle={getMovieTitle}/>
        <Movie data={movie}/>
      </Grid.Column>
    </Grid>
  );
}

export default App;
