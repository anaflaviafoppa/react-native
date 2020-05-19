import yelp from '../api/yeip';
import { useEffect, useState, useReducer } from 'react';
const initialState = {
  name: '',
  img: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'new':
      
      return { ...state, name: action.response.data.name, img: action.response.data.image_url };

    // return { ...state, name: action.response.name, img: action.response.image_url };
    default:
      throw new Error();
  }
}

export default (id) => {
  // const [state, dispatch] = useReducer(reducer, {});
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage, setErrorMessage] = useState('');

  const showSingleRestaurant = async (id) => {
    try {
      const response = await yelp.get(`${id}`);

      dispatch({ type: 'new', response });
      //setResult(response);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    showSingleRestaurant(id);
  }, []);

  return [showSingleRestaurant, errorMessage, state];
};
