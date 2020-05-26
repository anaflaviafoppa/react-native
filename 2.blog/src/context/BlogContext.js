import createDataContext from './createDataContent';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blog_post':
      return state.filter((item) => item.id !== action.payload);
    case 'edit_blog_post':
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });

    case 'get_blog_post':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    //reponse.data === []
    dispatch({ type: 'get_blog_post', payload: response.data });
  };
};

const actionBlogPost = (dispatch) => {
  // return (title, content, callback) => {
  //   dispatch({ type: 'add_blog_post', payload: { title, content } });
  //   if (callback) {
  //     callback();
  //   }

  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) {
      callback();
    }
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
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blog_post', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (title, content, id, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: 'edit_blog_post', payload: { title, content, id } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { actionBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
