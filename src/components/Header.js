import React from 'react';
import './Header.scss';
import BgImage from './imagebgtwo.jpg';

const Header = (props) => {
    const classes = 'header' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Header;