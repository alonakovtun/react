import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {

  let postsData = [
    { id: 1, message: "It's my first post", countLike: 15 },
    { id: 2, message: "Hi, how are you?", countLike: 20 }
  ]

  let postsElements = postsData.map(p => <Post message={p.message} countLike={p.countLike} />)

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
          </div>

        </form>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;