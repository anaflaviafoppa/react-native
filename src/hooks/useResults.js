import yelp from '../api/yeip';
import { useEffect, useState } from 'react';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const serchApi = async (searchTearm, price) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTearm,
          location: 'lisbon',
          price
        },
      });

      setResults(response.data.businesses);

    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    serchApi('pasta', 3);
  }, []);

  return [serchApi, errorMessage, results];
};
