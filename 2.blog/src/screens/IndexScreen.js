import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, actionBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={actionBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
