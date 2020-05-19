import yelp from '../api/yeip';
import { useEffect, useState } from 'react';

export default (item) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const serchApi = async (searchTearm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTearm,
          location: 'lisbon',
        },
      });

      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    serchApi(item);
  }, []);

  return [serchApi, errorMessage, results];
};
