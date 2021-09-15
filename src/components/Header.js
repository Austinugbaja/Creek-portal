import React from 'react';
// import './Header.scss';

const Header = (props) => {
    const classes = 'header' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}


export default Header;