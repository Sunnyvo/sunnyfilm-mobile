import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from '../components/MovieList';



const apiKey = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'

export default class Hot extends React.Component {

  constructor(props){
    super(props);
    this.fetchWithPage= this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.state = {
      movies: [],
      loading: false,
      page: 1
      // refreshing: false,
    }
  }
  fetchWithPage(page){
    this.setState({
      loading: true
    }, () => {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`)
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

  render() {
    let listmovies = this.state.movies
    let loadinglist = this.state.loading

    return (
      <View style={styles.container}>
        <MovieList
          movies  = {listmovies}
          loading = {loadinglist}
          loadMore = {this.loadMore}
          refreshPage = {this.refreshPage}
          navigation = {this.props.navigation}
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


