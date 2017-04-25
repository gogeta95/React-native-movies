import {
  AppRegistry
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from './app/login';
import MoviesComponent from './app/movielist';

const App = StackNavigator({
  Login: {screen: LoginComponent},
  Movies: {screen : MoviesComponent}
});

AppRegistry.registerComponent('PopularMoviesReact', () => App);
