import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

function Profile(props) {
    return (
        <div>
            <h1>Profile</h1>
            <div className={s.headerImg}>
                <img src="http://radikal.ru/F/s47.radikal.ru/i118/1111/b6/c98f6199ca84.jpg" alt="airline"/>
            </div>
            <div className={s.profile}>
                <div className={s.profile_img}>
                    <img src="https://klike.net/uploads/posts/2018-10/1539499416_1.jpg" alt="cat"/>
                </div>
                <div className={s.profile_info}>
                    <h2>Ivan Petrov</h2>
                    <p>Profile info 1</p>
                    <p>Profile info 2</p>
                </div>
            </div>
            <Posts state={props.state.posts} actions={props.actions}/>
        </div>
    );
}

export default Profile;