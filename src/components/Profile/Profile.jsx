import React from 'react'
import s from "./Profile.module.css"
import "./myPosts/MyPosts"
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} 
               dispatch={props.dispatch}
               newPostText={props.profilePage.newPostText}/>
    </div>
  );
}

export default Profile;