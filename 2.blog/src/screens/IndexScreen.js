import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList 
        data={blogPosts}
        keyExtractor={(item)=> item.title}
        renderItem={({item})=> {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
