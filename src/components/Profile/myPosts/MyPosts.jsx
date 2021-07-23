import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.post}>
      <div className={s.addPost}>
        <p>My posts</p>
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;