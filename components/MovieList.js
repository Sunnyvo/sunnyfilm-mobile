//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieCard from './MovieCard';
// import MovieCard from './MovieCard'
// create a component
class MovieList extends Component {
	render() {
		return (
			<View style= {styles.container}>
				{
					this.props.loading ? <Text> Loading...</Text> : null
				}
				<FlatList
					data = {this.props.movies}
					KeyExtractor = {movie => movie.id}
					renderItem = {(movieItem) => <MovieCard  {...movieItem.item} />}
					onRefresh= { () => alert("Hello world")}
					refreshing={this.props.loading}
				/>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		marginLeft: 37,
	},
});

//make this component available to the app
export default MovieList;
