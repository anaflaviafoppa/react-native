import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import useSingle from '../hooks/useSingle';

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;
  const [showSingleRestaurant, errorMessage, state] = useSingle(id);

  return (
    <View>
      <Text>{state.name}</Text>
      <Text>{state.rating} Stars</Text>
      <Text></Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={state.photos}
        renderItem={({ item }) => (
          <Image
            style={styles.tinyImage}
            source={{
              uri: item,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tinyImage: {
    width: 500,
    height: 240,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsShowScreen;
