import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import data from a static data json file
// import TEST_DATA from './data.json';
// import component
import MovieList from './components/MovieList';
import {Tabs} from './config/Router';
export default class App extends React.Component {

  render() {

    return (
      <Tabs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


