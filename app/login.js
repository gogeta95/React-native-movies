import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ProgressBarAndroid
} from 'react-native';

let username;
let password;

class LoginComponent extends Component {

  constructor(props){
    super(props);

    this.state={
      loading: false
    };
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor : '#00BCD4',justifyContent: 'center'}}>

      { !this.state.loading &&<View style={{flex: 1,justifyContent: 'center',alignItems: 'stretch',}}>
          <TextInput style={styles.input}
                     multiline={false}
                     autoCorrect={false}
                     placeholder='Username'
                     onEndEditing= {
                       (event) => {this.username = event.nativeEvent.text;}
                     } />

          <TextInput style={styles.input}
                     multiline={false}
                     autoCorrect={false}
                     placeholder='Password'
                     onEndEditing= {
                       (event) => {this.password = event.nativeEvent.text;}
                     } />

          <View style={styles.button}>
            <Button title='Log in'
                    color='#F57C00'
                    onPress ={
                      () => {
                        console.log('Username: '+this.username+' Password: '+this.password);
                        this.startLoading();
                      }
                    }/>
          </View>
          </View>
        }
          { this.state.loading && <View style={{flex: 1,position: 'absolute',top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'center',alignItems: 'center',}}>
                <ProgressBarAndroid  color='orange' />
            </View>}
          </View>
    );
  }

 startLoading(){
    this.setState({
      loading : true
    });
  }

}

const styles = StyleSheet.create({
    button: {
      marginTop: 16,
      marginLeft: 16,
      marginRight: 16
  },
    input: {
      fontSize: 16,
      marginTop: 16,
      marginLeft: 16,
      marginRight: 16
  }
});

export default LoginComponent
