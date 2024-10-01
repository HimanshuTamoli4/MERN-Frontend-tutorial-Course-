import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_POST") {
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
        Likes: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_lIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_lIST = [
  {
    id: "1",
    title: "Going To Mumbai ",
    body: "Hi Friends, I am going to Mumbai for my Vecations. Hope to enjoy  a lot . Peace out",
    Likes: 0,
    userId: "user-9",
    tags: ["#vacation", " #Mumbai", " #Enjoy"],
  },
  {
    id: "2",
    title: "Pass ho Bhai",
    body: "4 sal ki masti ke bad bhi pass ho gaye hai hard to believe.  ",
    Likes: 15,
    userId: "user-12",
    tags: ["#Graduating", " #Unbelievable", " #Enjoy"],
  },
];

export default PostListProvider;
