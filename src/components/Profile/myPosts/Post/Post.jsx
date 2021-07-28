import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://image.flaticon.com/icons/png/512/149/149995.png" alt="" width="30" height="30"/>
      <span>{props.message}</span>
      <div className={s.like}>
        <span>Like</span> {props.countLike}
      </div>
    </div>
  );
}

export default Post;