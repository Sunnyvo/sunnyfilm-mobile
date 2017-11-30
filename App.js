import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import data from a static data json file
// import TEST_DATA from './data.json';
// import component
import MovieList from './components/MovieList';

const apiKey = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      loading: false
    }
  }
  fetchWithPage(){

  }
  componentWillMount(){
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`)
      .then((data) => data.json())
      .then((json) => {
        return new Promise((resolve, reject)=> {
          setTimeout(()=>{
            resolve(json);
          },2000);
        });
      })
      .then ((json) => {
        console.log (json.results);
        this.setState({
          movies: json.results,
          loading: false
        });
      })
    });
  }
  render() {
    let listmovies = this.state.movies
    let loadinglist = this.state.loading
    return (
      <MovieList
        movies  = {listmovies}
        loading = {loadinglist}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
