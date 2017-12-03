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
    this.fetchWithPage= this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.state = {
      movies: [],
      loading: false,
      // refreshing: false,
      page: 1
    }
  }
  fetchWithPage(page){
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
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
  loadMore(){
    const newPage = this.state.page + 1
    this.setState({
      page: newPage
    },() => this.fetchWithPage(newPage));
  }

  componentWillMount(){
    this.fetchWithPage(1)
  }
  refreshPage(){
    this.setState({
      movies: [],
      page: 1
  },() => this.fetchWithPage(1));
  }

  render() {
    let listmovies = this.state.movies
    let loadinglist = this.state.loading
    return (
      <MovieList
        movies  = {listmovies}
        loading = {loadinglist}
        loadMore = {this.loadMore}
        refreshPage = {this.refreshPage}

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
