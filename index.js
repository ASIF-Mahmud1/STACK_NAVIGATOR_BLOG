import { AppRegistry } from 'react-native';
import  StackNav from './StackNavigator/StackNav' ;
import  DrawerNav from './DrawerNavigator/DrawerNav';
console.disableYellowBox = true;
/// Stack Navigator
AppRegistry.registerComponent('StackNavigator', () => DrawerNav);
