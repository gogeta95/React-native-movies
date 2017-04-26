import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid
} from 'react-native';
import TMDB_KEY from './key';
import GridView from 'react-native-grid-view';
import Movie from './movie';

const FETCH_MOVIES_URL ="https://api.themoviedb.org/3/movie/popular?api_key="+TMDB_KEY;
var navigate;

class MoviesComponent extends Component {
  static navigationOptions = {
    title: 'Movies',
  };

loadMovies() {
    fetch(FETCH_MOVIES_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      this.setState(responseJson);
      console.log(responseJson);
    })
    .catch((error) => console.error(error));
  }

  constructor(props) {
    super(props);
    this.loadMovies();
    this.state ={
      results:[]
    };
  }

    render(){
      navigate  = this.props.navigation.navigate;
      return (
        <View style={{flex: 1, backgroundColor: 'green'}}>
        { this.state.results.length>0 &&<GridView
        items = {this.state.results}
        itemsPerRow={2}
        renderItem={this.renderMovie}
        />}
        { this.state.results.length<=0 && <View style={{flex: 1,position: 'absolute',top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'center',alignItems: 'center'}}>
              <ProgressBarAndroid  color='orange' />
          </View>}
        </View>

      );
    }

    renderMovie(movie){
      console.log(this.props);
      return <Movie movie={movie}
      key = {movie.id}
      navigate={navigate}/>
    }

}

export default MoviesComponent;
