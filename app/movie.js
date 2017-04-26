import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185/";

class Movie extends Component {
imageUrl ='';

constructor(props){
  super(props);
    imageUrl = POSTER_BASE_URL+props.movie.poster_path;
}

  render(){

 const { navigate } = this.props;

    return (
      <TouchableHighlight style={styles.movie}
      onPress={() => navigate('Detail',this.props.movie) }>
      <Image source={{uri : imageUrl}}
      style={{flex: 1}}/>
      </TouchableHighlight>
    );
  }
}


var styles = StyleSheet.create({
  movie: {
    height: 300,
    flex: 1,
    alignItems: 'stretch',
  }
});

export default Movie;
