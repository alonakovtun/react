import React from 'react'
/* import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer' */
import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => <Post message={p.message} countLike={p.countLike}  key={p.id}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
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
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder="Enter your post text" />
        <div className={s.btn}>
          <button onClick={onAddPost} className={s.btnItem}>
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