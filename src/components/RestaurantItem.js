import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantItem = ({ sourceImg, name, review, rating, price }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyImage}
        source={{
          uri: sourceImg,
        }}
      />
      <Text style={styles.titleStyle}>{name}</Text>
      <View style={styles.viewSubtitleStyle}>
        <Text style={styles.subtitleStyle}>{rating} Stars </Text>
        <Text style={styles.subtitleStyle}>
          {review > 1 ? `${review} Reviews` : `${review} Review`}{' '}
        </Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  subtitleStyle: {
    fontSize: 15,
  },
  viewSubtitleStyle: {
    flexDirection: 'row',
    color: '#D3D3D3',
  },
  tinyImage: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default RestaurantItem;
