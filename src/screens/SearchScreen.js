import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantItem from '../components/RestaurantItem';
import yelp from '../api/yeip';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const serchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 5,
          term,
          location: 'lisbon',
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermSubmit={serchApi} onTermChange={setTerm} />
      <Text>Search Screen</Text>
      <Text>We have fount {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <RestaurantItem
            sourceImg={item.image_url}
            review={item.review_count}
            name={item.name}
            rating={item.rating}
          />
        )}
        //keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
