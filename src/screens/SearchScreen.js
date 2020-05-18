import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => console.log('term was submmit')}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
