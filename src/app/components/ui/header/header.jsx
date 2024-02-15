import React from 'react';
import classes from './header.module.css';
import menu from '../../../data/menu';
import Burger from '../burger/burger';
import bearTop from '../../../assets/images/bear-top.png';

const Header = ({ handleFade }) => {
    return (
        <div className={classes.topMenuWrap}>
            <div
                className={classes.bearTopWrap}
                onClick={() => handleFade('/')}
            >
                <img src={bearTop} alt='Bear' />
            </div>
            <div className={classes.headerMobileTitleWrap}>
                <div className={classes.headerMobileTitle}>Норильск,</div>
                <div className={classes.headerMobileSubTitle}>который мы увозим с собой</div>
            </div>
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
