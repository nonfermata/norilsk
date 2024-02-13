import React from 'react';
import classes from './header.module.css';
import menu from '../../../data/menu';
import Burger from '../burger/burger';

const Header = ({ handleFade }) => {
    return (
        <div className={classes.topMenuWrap}>
            <Burger handleFade={handleFade} />
            <nav className={classes.topMenu}>
                <div onClick={() => handleFade('../')} className='menuLink'>
                    Главная
                </div>
                {menu.map(({ id, link, name }) => (
                    <div
                        key={id}
                        onClick={() => handleFade('../' + link)}
                        className='menuLink'
                    >
                        {name}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Header;
