import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_ INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  /* 2nd Method
 const addPost = (postTitle,postBody,reactions,userId,tags) => {
  dispatchPostList({
    type: "ADD_POST",
    payload:{
      title: postTitle,
      body: postBody,
      reactions: reactions,
      userId: userId,
      tags: tags,
    }
  });
};
*/

  // const addInitialPost = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_ INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  // useMemo Example
  // const arr = [5,2,6,7,4];
  // const sortedArr = useMemo(()=> arr.sort(), [arr]);

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
