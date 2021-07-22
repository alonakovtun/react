import React from 'react'
import s from "./../styles/Profile.module.css"

const Profile = () => {
  return (
    <div className="content">
      {/* <div className="banner">
          <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"></img>
        </div> */}
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

      <div className={s.post}>
        <div className={s.addPost}>
          <p>My posts</p>
          <form action="post">
            <input type="text" placeholder="Your news..." />
            <button className={s.btnSend}>
              Send
            </button>
          </form>
        </div>

        <div className={s.posts}>
          <div className={s.item}>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</div>
          <div className={s.item}>My first app in React :)</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;