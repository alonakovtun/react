import React from 'react'
import s from "./Profile.module.css"
import "./myPosts/MyPosts"
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />

     <MyPosts />
    </div>
  );
}

export default Profile;