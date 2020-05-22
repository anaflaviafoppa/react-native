import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather, FontAwesome } from '@expo/vector-icons';

const showScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((item) => item.id === id);

  return (
    <View>
      <Text>showScreen</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id })}>
        <FontAwesome name="pencil" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default showScreen;
