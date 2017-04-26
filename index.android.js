import {
  AppRegistry
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from './app/login';
import MoviesComponent from './app/movielist';
import MovieDetail from './app/moviedetail';

const App = StackNavigator({
  Login: {screen: LoginComponent},
  Movies: {screen : MoviesComponent},
  Detail: {screen :MovieDetail}
});

AppRegistry.registerComponent('PopularMoviesReact', () => App);
