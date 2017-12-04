import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from '../components/MovieList';



const apiKey = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.fetchWithPage= this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.state = {
      movies: [],
      loading: false,
      page: 1,
      onSearch: false
      // refreshing: false,
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
    });
  }


  fetchSearch(key){
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&include_adult=false&query=${key}`)
      .then((data) => data.json())
      .then((json) => {
        return new Promise((resolve, reject)=> {
          setTimeout(()=>{
            resolve(json);
          },1);
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
    });
  }


  loadMore(){
    const newPage = this.state.page + 1
    this.setState({
      page: newPage
    },() => setTimeout(
        () => this.fetchWithPage(newPage),2000)
    );
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
  searchMovie = event => {

    key = 'Th';

    console.log(key);
    const Key = key;

    this.setState({
      movies: [],
      page: 1
  },() => this.fetchSearch(Key));
  }

  render() {
    let listmovies = this.state.movies
    let loadinglist = this.state.loading
    return (
      <View style={styles.container}>
        <MovieList
          onSearch ={this.props.onSearch}
          movies  = {listmovies}
          loading = {loadinglist}
          loadMore = {this.loadMore}
          refreshPage = {this.refreshPage}
          navigation = {this.props.navigation}
          searchMovie ={this.searchMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


