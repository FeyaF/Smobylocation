import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const screens = {
  
  Login: {
  	screen: Login
  }, 

  Signup: {

  	screen: Signup
  }

}
const LoginStack = createStackNavigator(screens);


export default createAppContainer(LoginStack);