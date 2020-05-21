import createDataContext from './createDataContent';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case 'delete_blog_post':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const actionBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    dispatch({ type: 'add_blog_post', payload: { title, content } });
    callback();
  };


  //Axios model
//   return async (title, content, callback) => {
//     try{

//     await axios.post('hsfiofhdui', title, content);
//     dispatch({ type: 'add_blog_post', payload: { title, content } });
//     callback();
//     }catch (e){
// throw erros hahdods
//     }
  
//   };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blog_post', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { actionBlogPost, deleteBlogPost },
  []
);
