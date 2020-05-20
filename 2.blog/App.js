import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={IndexScreen} options={{ title: 'Business Search' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </BlogProvider>
  );
}
