import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [value, onChangeText] = React.useState('Search');

  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" />
      <Text>Input</Text>
      {/* <TextInput onChangeText={(text) => onChangeText(text)} value={value} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
});

export default SearchBar;
