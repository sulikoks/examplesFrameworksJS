let renderEnterTree = () => console.log('State Render')

export let state = {
    profile: { 
        posts: {
            post: [
                { id: 1, author: "Ivan Sidorov", message: "Post 1", likeCount: 12 },
                { id: 2, author: "Petr Sidorov", message: "Post 2", likeCount: 23 },
                { id: 3, author: "Ivan Smirnov", message: "Post 3", likeCount: 231 } ],
            newPostText: ''
        }
    },
    messages: {
        dialogs: [
            { id: 1, name: 'Lera' },
            { id: 2, name: 'Olya' },
            { id: 3, name: 'Andrey' }
        ],
        messages: [
            { id: 1, msg: 'Hi Lera' },
            { id: 2, msg: 'Olya, How are you&' },
            { id: 3, msg: 'Thank, i am fine' },
            { id: 4, msg: 'Olya, How are you&' },
            { id: 5, msg: 'Thank, i am fine' }
        ],
        newMessageText: ''
    }
};

export const actions = {
    posts: {
        addPost() {
            let post = { 
                id: 4, 
                author: "Ivan Smirnov", 
                message: state.profile.posts.newPostText, 
                likeCount: 123 };
            state.profile.posts.post.push(post);
            renderEnterTree();
            state.profile.posts.newPostText = '';
        },
        newPostChange(newValue) {
            state.profile.posts.newPostText = newValue;
            renderEnterTree();
        } },
    messages: {
        addMessage() {
            let message = {
                id: 6,
                msg: state.messages.newMessageText
            };
            state.messages.messages.push(message);
            state.messages.newMessageText = '';
            renderEnterTree();
        },
        newMessageChange(newValue) {
            state.messages.newMessageText = newValue;
            renderEnterTree();
        } }
};

export const subscribe = (observer) => {
    renderEnterTree = observer;
};
