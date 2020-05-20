import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({ navigation }) => {
  const { state, actionBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={actionBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', { id: item.id })}>
                <Text style={styles.textSytle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textSytle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
});

export default IndexScreen;
