import React, { useRef } from 'react';
import { Form, redirect } from 'react-router-dom';

const CreatePost = () => {

  return (
    <Form method = "POST" className="create-post" >
           <div class="mb-3">
        <label htmlFor="userId" class="form-label">
        Enter your User Id here 
        </label>
        <input
          type="text"
          name="userId"
          class="form-control" 
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="title"
          placeholder="How are you feeling today... "
        />
      </div>
     
      <div class="mb-3">
        <label htmlFor="body" class="form-label">
           Post Content 
        </label>
        <textarea
          type="text"
          name="body"
          rows= "4"
          class="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="reaction" class="form-label">
          Number of Reactions 
        </label>
        <input
          type="text"
          name="reactions"
          class="form-control"
          id="reactions"
          placeholder="How are you feeling today... "
        />
      </div>

      <div class="mb-3">
        <label htmlFor="tags" class="form-label">
          Enter your hashtags here 
        </label>
        <input
          type="text"
          name="tags"
          class="form-control"
          id="title"
          placeholder="Please Enter tags Using Space "
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </Form>
  );  
};

export  async function  createPostAction(data) {
  const formData =  await data.request.formData();
   const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
     console.log(postData);

  fetch('https://dummyjson.com/posts/add',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(postData),
  })
  .then(res => res.json())
  .then(post =>{
    console.log(post);
  });
  return redirect("/");
}


export default CreatePost;
