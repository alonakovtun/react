import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.post}>
      <div className={s.addPost}>
        <h3>My posts</h3>
        <form action="post">
          <input type="text" placeholder="Your news..." />
          <div className={s.btn}>
            <button className={s.btnItem}>
              Send
            </button>
            {/* <button className={s.btnItem}>
                Remove
              </button> */}
          </div>

        </form>
      </div>

      <div className={s.posts}>
        <Post message="Hi, how are you?" countLike="15"/>
        <Post message="It's my first post" countLike="20"/> 
      </div>
    </div>
  );
}

export default MyPosts;