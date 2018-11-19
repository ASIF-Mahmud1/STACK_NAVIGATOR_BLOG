import React from 'react';
import { createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import StackNav from '../StackNavigator/StackNav' ;
StackNav.navigationOptions = {
  drawerLabel: 'Home!',
};
const DrawerNav= createDrawerNavigator(
  {
    Page1 : {
    screen : Page1
  },
    Page2 : {
    screen : Page2
  },
  Page3 : {
    screen : StackNav,

  }
  },

  {
  initialRouteName: 'Page1'
  }
);

export default DrawerNav;
