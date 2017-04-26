import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185/";

class Movie extends Component {
imageUrl ='';

constructor(props){
  super(props);
    imageUrl = POSTER_BASE_URL+props.movie.poster_path;
}

  render(){

    return (
      <Image source={{uri : imageUrl}}
      style={styles.movie}/>
    );
  }
}

export default Movie;

var styles = StyleSheet.create({
  movie: {
    height: 300,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  }
});
