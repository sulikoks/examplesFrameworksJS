import React from 'react';

function NewPost(props) {
    let newPostEl = React.createRef();

    let addPost = () => {
        props.actions.addPost();
    };
    let newPostChange = () => {
        let msg = newPostEl.current.value;
        props.actions.newPostChange(msg);
    };

    return (
        <div>
            <p>New Post</p>
            <textarea onChange={ newPostChange } ref={ newPostEl } value={props.state}/>
            <button onClick={ addPost }>Add post</button>
        </div>
    );
}

export default NewPost;