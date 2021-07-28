import React from 'react'
import s from "./Profile.module.css"
import "./myPosts/MyPosts"
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData}/>
    </div>
  );
}

export default Profile;