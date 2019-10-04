import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    let path = '/messages/' + props.id;
    return (
        <div>
            <NavLink to={path} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
        </div>);
}
export default Dialog;