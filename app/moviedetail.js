import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w500";

class MovieDetail extends Component {

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.original_title}`,
  });


  render(){

      const movie = this.props.navigation.state.params;
      let imageUrl = BACKDROP_BASE_URL + movie.backdrop_path;

    return (
      <View style={{flex:1,alignItems :'stretch'}}>
        <Image  source={{uri : imageUrl }}
        style={{height: 240}}/>
        <Text style={{ padding: 16}}>
        {movie.overview}
        </Text>
      </View>
    );
  }
}
export default MovieDetail;
