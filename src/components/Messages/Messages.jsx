import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Messages(props) {
    let dialogs = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} />)
    let messages = props.state.messages.map(m => <Message id={m.id} msg={m.msg} />)

    let newMessageEl = React.createRef();
    let sendMessage = () => {
        props.actions.addMessage();
    };
    let newMessageChange = () => {
        let m = newMessageEl.current.value;
        props.actions.newMessageChange(m);
        console.log(m);
    }

    return (
        <div>
            <h1>Messages</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <h4>Dialogs</h4>
                    {dialogs}
                </div>
                <div className={s.dialog}>
                    <h4>Message</h4>
                    {messages}
                    <textarea   onChange={newMessageChange} 
                                ref={newMessageEl} 
                                value={props.state.newMessageText} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div> );
}

export default Messages;