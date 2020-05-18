import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import RestaurantItem from './RestaurantItem';

const FlatListRestaurant = ({ arrayChoosen }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
});

export default FlatListRestaurant;
