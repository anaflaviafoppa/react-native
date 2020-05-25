import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostInput from '../components/blogPostInput';

const editScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);

  const { editBlogPost } = useContext(Context);

  const { id } = route.params;

  const blogPost = state.find((item) => item.id === id);

  return (
    <View>
      <Text>model</Text>
      <BlogPostInput
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(title, content,id, () => navigation.pop());
        }}
      />
    </View>
  );
};

export default editScreen;
