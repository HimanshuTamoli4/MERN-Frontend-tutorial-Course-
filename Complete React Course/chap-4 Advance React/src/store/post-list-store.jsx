import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost : () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    }
    else if (action.type === "ADD_ INITIAL_POSTS"){
        newPostList = action.payload.posts ;
    }  

    else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currPostList];
    }

    return newPostList;
  };
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
 
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_ INITIAL_POSTS",
      payload: {
         posts
      },
    });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[dispatchPostList]);

  // useMemo Example
  const arr = [5,2,6,7,4];
  const sortedArr = useMemo(()=> arr.sort(), [arr]);

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
   []
  );

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPost ,deletePost }}>
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
