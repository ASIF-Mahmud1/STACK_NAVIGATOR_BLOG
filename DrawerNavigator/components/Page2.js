import React from 'react';
import {Text, View} from 'react-native';

class Page2 extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Two',

  };
  render()
  {
    return(
      <View>
        <Text> This is the Second Page!</Text>
      </View>
    )
  }
}

export default Page2
