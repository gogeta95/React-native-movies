import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TMDB_KEY from './key';



class MoviesComponent extends Component {
  static navigationOptions = {
    title: 'Movies',
  };

loadMovies() {
  console.log(TMDB_KEY);
    fetch("https://api.themoviedb.org/3/movie/popular?api_key="+TMDB_KEY)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => console.error(error));
  }

  constructor(props) {
    super(props);
    this.loadMovies();

  }

    render(){
      return (
        <View style={{flex: 1, backgroundColor: 'green'}}>
        </View>

      );
    }

}

export default MoviesComponent;
