import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import Add from '../screens/bill';

import { PRIMARY_COLOR, WHITE_TEXT_COLOR } from '../constants/color';

const headerStyle = {
  headerStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: WHITE_TEXT_COLOR,
  },
  headerTintColor: WHITE_TEXT_COLOR,
};

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Bright Money',
      ...headerStyle,
    }),
  },
  Add: {
    screen: Add,
    navigationOptions: () => ({
      title: 'Bill',
      ...headerStyle,
    }),
  },
});

export default createAppContainer(RootNavigator);
