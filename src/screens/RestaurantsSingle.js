import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useSingle from '../hooks/useSingle';

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;
  const [showSingleRestaurant, errorMessage, state] = useSingle(id);

console.log('STATE ----------------------------',state)
  return (
    <View>
      <Text>Results Show</Text>
      <Text>O nome é {state.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
