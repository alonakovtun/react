import React from 'react'
import s from "./Profile.module.css"
import "./myPosts/MyPosts"
import MyPosts from './myPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div className={s.about}>
        <img className={s.photo}src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          width="350" ></img>
        <div className={s.info}>
          <span className={s.name}>Alona Kovtun</span>
          <p>
            Date of birth: 5 December <br />
            City: Rzeszow <br />
            Education: WSIZ <br />
          </p>
        </div>
      </div>

     <MyPosts />
    </div>
  );
}

export default Profile;