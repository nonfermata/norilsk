import React from 'react';
import classes from './animationArrow.module.css';

const AnimationArrow = ({ onClick, arrowDown }) => {
    return (
        <div
            onClick={onClick}
            className={arrowDown ? classes.arrowUp : classes.arrowDown}
        ></div>
    );
};

export default AnimationArrow;
