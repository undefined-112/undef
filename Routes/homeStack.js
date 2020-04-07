import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation';
import {SignIn} from '../Views/SignIn';

const screens = {
  SignIn: {
    screen: SignIn,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
