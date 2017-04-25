import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class MoviesComponent extends Component {
  static navigationOptions = {
    title: 'Movies',
  };

  constructor(props) {
    super(props);

  }
    render(){
      return (
        <View style={{flex: 1, backgroundColor: 'green'}}>
        </View>

      );
    }

}

export default MoviesComponent;
