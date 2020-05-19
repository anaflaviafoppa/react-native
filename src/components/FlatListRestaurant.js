import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import RestaurantItem from './RestaurantItem';

const FlatListRestaurant = ({ arrayChoosen, title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        style={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={arrayChoosen}
        renderItem={({ item }) => (
          <RestaurantItem
            sourceImg={item.image_url}
            review={item.review_count}
            name={item.name}
            rating={item.rating}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatListRestaurant;
