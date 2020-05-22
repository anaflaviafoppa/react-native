import React, { useState, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context } from '../context/BlogContext';

import BlogPostInput from '../components/blogPostInput';

const createScreen = ({ navigation }) => {
  const { actionBlogPost } = useContext(Context);

  return (
    <>

      <BlogPostInput
        onSubmit={(title, content) => {
          actionBlogPost(title, content, () => navigation.navigate('Home'));
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default createScreen;
