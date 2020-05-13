import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { ChatList } from './views/ChatList';
import { ChatView } from './views/ChatView';

const screens = {
  ChatList: {
    screen: ChatList,
  },
  ChatView: {
    screen: ChatView,
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
