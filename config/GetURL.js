import React, { Component } from 'react';
import { } from 'react-native';
const apiKey = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'

export default function fetchWithPage(page){
() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
    .then((data) => data.json())
    .then((json) => {
      return new Promise((resolve, reject)=> {
        setTimeout(()=>{
          resolve(json);
        },1000);
      });
    })
    .then ((json) => {
      console.log(this.state.movies)
      const keySets = new Set([...this.state.movies.map((m => m.id))]);
      const setResults = json.results.filter((m) => !keySets.has(m.id));
    
      this.setState({
        movies: this.state.movies.concat(setResults),
        loading: false
      });
    })
  };
}
