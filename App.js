// import * as React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import SearchScreen from './src/screens/SearchScreen';

//  const navigator = createStackNavigator(
//    {
//      Search: SearchScreen,
//    },
//    {
//      initialRouteName: 'Search',
//      defaultNavigationOptions: {
//        title: 'BusinessSearch',
//      },
//    }
//  );

//  export default createAppContainer(navigator);

import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Business Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
