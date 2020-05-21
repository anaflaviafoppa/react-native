import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const createScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { actionBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.labelStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Button
        title="Add Blog Post"
        //This is not the best approach - calls API:
        // onPress={() => {
        //   actionBlogPost(title, content);
        //   navigation.navigate('Home');
        // }}

        onPress={() => {
          actionBlogPost(title, content, () => {
            navigation.navigate('Home');
          });
        }}
      />
    </View>
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
