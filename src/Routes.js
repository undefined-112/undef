import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
