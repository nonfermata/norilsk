import React from 'react';
import classes from '../../ui/menu/menu.module.css';
import menu from '../../../data/menu';

const Menu = ({ handleFade }) => {
    return (
        <div className={classes.topMenuWrap}>
            <div
                onClick={() => handleFade('../')}
                className={classes.topMenuLink}
            >
                Главная
            </div>
            {menu.map(({ id, link, name }) => (
                <div
                    key={id}
                    onClick={() => handleFade('../' + link)}
                    className={classes.topMenuLink}
                >
                    {name}
                </div>
            ))}
        </div>
    );
};

export default Menu;
