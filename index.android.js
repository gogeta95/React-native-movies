import {
  AppRegistry
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from './app/login';

const App = StackNavigator({
  Login: {screen: LoginComponent},
  Movies: {screen : MoviesComponent}
});

AppRegistry.registerComponent('PopularMoviesReact', () => LoginComponent);
