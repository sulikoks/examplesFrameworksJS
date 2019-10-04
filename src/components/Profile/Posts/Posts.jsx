import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

function Posts(props) {
    let posts = props.state.post
        .map(p => <Post author={p.author} message={p.message} likeCount={p.likeCount} />);
    return (
        <div>
            <h3>My posts</h3>
            <NewPost state={props.state.newPostText} actions={props.actions} />
            {posts}
        </div>
    );
}

export default Posts;