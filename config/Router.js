//import lirarie
import React, { Component } from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Home from '../screen/Home';
import Hot from '../screen/Hot';
import Popular from '../screen/Popular';
import TopRate from '../screen/TopRate';
// import Playing from '../screen/Playing';
import MovieProfile from '../screen/MovieProfile';
// create a component
export const HomeStack = StackNavigator({
  Playing: {
    screen: Home,
    navigationOptions: {
      title: 'Playing',
    }
  },

  MovieProfile: {
    screen: MovieProfile,
    navigationOptions: {
      // title: `${state.}`
    }
  },


});

export const TopRateStack = StackNavigator({
  TopRate: {
    screen: TopRate,
    navigationOptions: {
      title: 'TopRate',
    }
  },
});

export const PopularStack = StackNavigator({
  TopRate: {
    screen: Popular,
    navigationOptions: {
      title: 'Popular',
    }
  },
});

export const HotStack = StackNavigator({
  TopRate: {
    screen: Hot,
    navigationOptions: {
      title: 'Hot',
    }
  },
});

export const Tabs = TabNavigator({
  Home:{
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name='home' size ={35} color= {tintColor}/>
    }

  },
  Hot:{
    screen: HotStack,
    navigationOptions: {
      tabBarLabel: 'Up coming',
      tabBarIcon: ({tintColor}) => <Icon name='theaters' size ={35} color= {tintColor}/>
    }
  },
  Toprate:{
    screen: TopRateStack,
    navigationOptions: {
      tabBarLabel: 'TopRate',
      tabBarIcon: ({tintColor}) => <Icon name='star' size ={35} color= {tintColor}/>
    }

  },
  Popular:{
    screen: PopularStack,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarIcon: ({tintColor}) => <Icon name='people' size ={35} color= {tintColor}/>
    }

  }
})
