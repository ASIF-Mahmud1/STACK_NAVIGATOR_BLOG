import React from 'react';
import {Text, View} from 'react-native';

class Page1 extends React.Component{
  static navigationOptions = {
    drawerLabel: 'One',

  };
  render()
  {
    return(
      <View>
        <Text> This is the First Page!</Text>
      </View>
    )
  }
}

export default Page1
