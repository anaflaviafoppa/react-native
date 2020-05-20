import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';

const showScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((item) => item.id === id);
  
  return (
    <View>
      <Text>showScreen</Text>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default showScreen;
