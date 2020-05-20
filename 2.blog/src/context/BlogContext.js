import createDataContext from './createDataContent';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_block_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const actionBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_block_post' });
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { actionBlogPost }, []);
