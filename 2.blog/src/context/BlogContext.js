import React, { Children } from 'react';
const BlogContext = React.createContext();
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
