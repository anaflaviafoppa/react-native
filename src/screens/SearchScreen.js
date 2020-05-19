import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import FlatListRestaurant from '../components/FlatListRestaurant';
import { ScrollView } from 'react-native-gesture-handler';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [serchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = (price) => {
    //price ==='$ || '$$'...
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar term={term} onTermSubmit={() => serchApi(term)} onTermChange={setTerm} />
      <ScrollView style={styles.scrollView}>
        <Text>Search Screen</Text>
        <Text>
          {' '}
          We have fount {results.length}
          results
        </Text>

        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <FlatListRestaurant title="Cost Effective" arrayChoosen={filterResultsByPrice('€')} />

        <FlatListRestaurant title="Bit Pricer" arrayChoosen={filterResultsByPrice('€€')} />

        <FlatListRestaurant title="Bit Spender" arrayChoosen={filterResultsByPrice('€€€')} />
        <FlatListRestaurant
          navigation={navigation}
          title="Fancy Restaurant"
          arrayChoosen={filterResultsByPrice('€€€€')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 30,
    marginBottom: 110,
  },
});

export default SearchScreen;
