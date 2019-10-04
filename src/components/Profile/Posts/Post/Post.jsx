import React from 'react';
import s from './Post.module.css';

function Post(props) {
    //console.log(props);
    return (
        <div className={s.item}>
            <h4>{props.author}</h4>
            <div className={s.item_info}>
                <img className={s.item_img} src="https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp" alt="avatar" />
                <div className={s.item_text}>
                    {props.message}
                </div>
            </div>
            <div className={s.item_footer}>
            <span> {props.likeCount} Likes</span>
            <span> 10 Views</span>
            </div>
        </div>
    );
}

export default Post;