import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => <Post message={p.message} countLike={p.countLike} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.post}>
      <div className={s.addPost}>
        <h3>My posts</h3>

        {/* <input type="text" placeholder="Your news..." ref={newPostElement} /> */}
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <div className={s.btn}>
          <button onClick={addPost} className={s.btnItem}>
            Send
          </button>
        </div>


      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;