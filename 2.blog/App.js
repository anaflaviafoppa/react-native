import * as React from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import showScreen from './src/screens/showScreen';
import createScreen from './src/screens/createScreen';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={IndexScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
        })}
      />

      {/* <Stack.Screen name="Home" component={IndexScreen} /> */}
      <Stack.Screen name="ShowScreen" component={showScreen} options={{ title: 'Show Screen' }} />
      <Stack.Screen
        name="CreateScreen"
        component={createScreen}
        options={{ title: 'Create Screen' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
