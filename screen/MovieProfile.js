//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
class MovieProfile extends Component {

  render() {

    const props = this.props.navigation.state.params;
    const img = {
			uri: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
				props.poster_path}`,
		};
    return (
      <View>
        <Image style={styles.image} source={img}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title} </Text>
          <Text style={styles.overview}>{props.overview} </Text>
          <Text style={styles.overview}> Average: {props.vote_average} </Text>
        </View> 
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  image:{
    alignItems:'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: 400,
    height: 550,
  },
  textContainer:{
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    bottom: 0,
  },
  title:{
    color: 'rgb(200,200,200)',
    fontSize: 18,
    fontWeight: '600',
  },
  overview:{
    color: 'rgb(200,200,200)',
  }
});

//make this component available to the app
export default MovieProfile;
