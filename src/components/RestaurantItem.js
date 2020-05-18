import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantItem = ({ sourceImg, name, review, rating, price }) => {
  return (
    <View>
      <Image style={styles.tinyImage} source={{
          uri: sourceImg,
        }} />
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
  titleStyle: {
    fontSize: 20,
  },
  subtitleStyle: {
    fontSize: 15,
  },
  viewSubtitleStyle: {
    flexDirection: 'row',
    color: '#D3D3D3',
  },
  tinyImage: {
    width: 100,
    height: 128,
  },
});

export default RestaurantItem;
