import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(BlogContext);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener('focus', () => {
      getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.navigate('ShowScreen', { id: item.id })}
              >
                <Text style={styles.textSytle}>{item.title}</Text>
                <View style={styles.secondView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EditScreen', { id: item.id })}
                  >
                    <FontAwesome name="pencil" size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.iconStyle} name="trash" />
                  </TouchableOpacity>
                </View>
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
  secondView: {
    display: 'flex',
    flexDirection: 'row',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderColor: 'gray',
  },
});

export default IndexScreen;
