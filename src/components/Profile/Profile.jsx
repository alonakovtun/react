import React from 'react'
import "./myPosts/MyPosts"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;