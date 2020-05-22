import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
//import inputFile from '../components/inputFile';

const editScreen = ({ route }) => {
  const { state } = useContext(Context);

  const { editBlogPost } = useContext(Context);

  const { id } = route.params;

  const blogPost = state.find((item) => item.id === id);

  return (
    <View>
      <Text>model</Text>
    </View>
  );
};

export default editScreen;
