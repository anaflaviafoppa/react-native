import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantItem from '../components/RestaurantItem';
import yelp from '../api/yeip';
import FlatListRestaurant from '../components/FlatListRestaurant';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [resultsBitPricer, setResultsBitPricer] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [resultsEffective, setResultEffective] = useState([]);
  const [resultsBitSpender, setResultBitSpender] = useState([]);

  const serchApi = async () => {
    try {
      const responseBitPricer = await yelp.get('/search', {
        params: {
          limit: 5,
          term,
          location: 'lisbon',
          price: 2,
        },
      });

      const responseBitSpender = await yelp.get('/search', {
        params: {
          limit: 10,
          term,
          location: 'lisbon',
          price: 3,
        },
      });

      const responseEffective = await yelp.get('/search', {
        params: {
          limit: 10,
          term,
          location: 'lisbon',
          price: 1,
        },
      });

      setResultsBitPricer(responseBitPricer.data.businesses);
      setResultEffective(responseEffective.data.businesses);
      setResultBitSpender(responseBitSpender.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermSubmit={serchApi} onTermChange={setTerm} />
      <Text>Search Screen</Text>
      <Text>
        We have fount {resultsEffective.length + resultsBitPricer.length + resultsBitSpender.length}{' '}
        results
      </Text>

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView style={styles.scrollView}>
        <Text>Cost Effective</Text>
        <FlatListRestaurant arrayChoosen={resultsEffective} />
        <Text>Bit Pricer</Text>
        <FlatListRestaurant arrayChoosen={resultsBitPricer} />
        <Text>Bit Spender</Text>
        <FlatListRestaurant arrayChoosen={resultsBitSpender} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 30,
    marginBottom: 110,
  },
});

export default SearchScreen;
