//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
import {SearchBar} from 'react-native-elements';
// import MovieCard from './MovieCard'
// create a component
class MovieList extends Component {
	constructor(props){
		super(props)
		this.state= {

		}

	}
	render() {
		const navigate = this.props.navigation.navigate
		// const onLearnMore = (user) => {
		// 	this.props.navigation.navigate()
		// }
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.movies}
					keyExtractor={movie => movie.id}
					renderItem={(movieItem) => <MovieCard  {...movieItem.item}
					loadProfile = {()=> navigate('MovieProfile',movieItem.item)}
					 />}
					onRefresh= {this.props.refreshPage}
					refreshing={this.props.loading}
					onEndReachedThreshold={0.05}
					onEndReached = {this.props.loading ? null : this.props.loadMore}
					ListFooterComponent={this.renderFooter}
					ListHeaderComponent={this.renderHeader}
					/>
			</View>
		);
	}
	renderFooter = () => {
		return this.props.loading ?
				<View style={{ paddingVertical: 20 }}>
					<Text> {`Coming soon >.<`} </Text>
				</View>
			:
				(<View style={{ paddingVertical: 20 }}>
				<ActivityIndicator
					color = '#bc2b78'
					animating size='large'
					style={styles.activityIndicator}
				/>
				</View>
				);
	}
	renderHeader = () => {
		return <SearchBar placeholder="Type Here..." lightTheme round  onChange=
	{e => this.props.searchMovie(this.e)
	}
		/>;
	}
}



// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	activityIndicator: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		height: 70,

	},

});

//make this component available to the app
export default MovieList;
