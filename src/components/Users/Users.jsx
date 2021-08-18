import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://image.flaticon.com/icons/png/512/149/149995.png', followed: true, fullName: "Bobby Bob", status: "Hi, friends :)", location: { city: "Rzeszow", country: "Poland", }, },
            { id: 2, photoUrl: 'https://image.flaticon.com/icons/png/512/149/149995.png', followed: false, fullName: "John Smith", status: "Ooops...", location: { city: "Berlin", country: "Germany", }, },
            { id: 3, photoUrl: 'https://imgflip.com/s/meme/Spiderman-Peter-Parker.jpg', followed: false, fullName: "Peter Parker", status: "I'm Spider Man :)", location: { city: "New York", country: "United States", }, }
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div className="d-flex mb-3" key={u.id}>
                    <div className={s.photo}>
                        <div className="mb-2">
                            <img src={u.photoUrl} alt="" width="100px" height="100px" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.follow(u.id) }} className="btn btn-secondary"> Follow</button>
                                : <button onClick={() => { props.unfollow(u.id) }} className="btn btn-secondary">Unfollow</button>}
                        </div>
                    </div>
                    <div className="border border-secondary rounded w-75 d-flex p-2 position-relative">
                        <div className="d-flex flex-column justify-content-between">
                            <div className="fw-bold">{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className="fw-bold position-absolute end-0">
                            <div>{u.location.country},</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;