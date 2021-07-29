import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => <Post message={p.message} countLike={p.countLike} />)

  let newPostElement = React.createRef();
  let addPost = () => { 
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.post}>
      <div className={s.addPost}>
        <h3>My posts</h3>
        <form>
          <input type="text" placeholder="Your news..." ref={newPostElement} />
          <div className={s.btn}>
            <button onClick={addPost} className={s.btnItem}>
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