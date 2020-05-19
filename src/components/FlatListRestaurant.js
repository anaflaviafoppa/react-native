import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import RestaurantItem from './RestaurantItem';
import { withNavigation } from '@react-navigation/compat';

const FlatListRestaurant = ({ arrayChoosen, title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={arrayChoosen}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
            <RestaurantItem
              sourceImg={item.image_url}
              review={item.review_count}
              name={item.name}
              rating={item.rating}
              price={item.price}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  container: {
    marginBottom: 15,
  },
});

//Special version of FlatListRestaurant. This is important
// Now we can use navigation on FlatListRestaurant
export default withNavigation(FlatListRestaurant);
