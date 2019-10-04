import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Link(props) {
    return (
    <div>
        <NavLink to={props.to} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
    </div>);
}

function Navbar() {
    return(
        <nav className={s.nav}>
            <Link name="Profile" to="/profile" />
            <Link name="Messages" to="/messages" />
            <Link name="News" to="/news" />
            <Link name="Music" to="/music" />
            <Link name="Sittings" to="/sittings" />
        </nav>
    );
}

export default Navbar;