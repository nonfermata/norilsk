import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './mainPage.module.css';
import star from '../../../assets/images/star.png';
import menu from '../../../data/menu';
import { useNavigate } from 'react-router-dom';
import Prolog from './prolog/prolog';
import { modifyFooter } from '../../../../redux/footerReducer';
import Burger from '../../ui/burger/burger';

const MainPageContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isFirstRender = !localStorage.getItem('mainPageLoaded');
    const [isVisible, setIsVisible] = useState(!isFirstRender);
    const [starStyle, setStarStyle] = useState(
        isFirstRender ? classes.starZero : classes.starAnimated
    );
    const [titleStyle, setTitleStyle] = useState(
        isFirstRender ? classes.titleInvisible : classes.titleVisible
    );
    const menuStyleInitial = {};
    menu.forEach(({ id }) => {
        menuStyleInitial[id] = isFirstRender ? '' : classes.menuItemVisible;
    });
    const [menuItemStyle, setMenuItemStyle] = useState(menuStyleInitial);
    const [isProlog, setIsProlog] = useState(false);
    const crossfade = (link) => {
        setIsVisible(false);
        setTimeout(() => {
            navigate(link);
        }, 200);
    };

    useEffect(() => {
        if (isFirstRender) {
            dispatch(modifyFooter(false));
            setTimeout(() => {
                setIsVisible(true);
            }, 10);
            localStorage.setItem('mainPageLoaded', 'ok');
            setTimeout(() => {
                setTitleStyle(classes.titleVisible);
                setTimeout(() => {
                    setStarStyle(classes.starAnimated);
                    menu.forEach(({ id }) => {
                        setTimeout(() => {
                            setMenuItemStyle((prevState) => ({
                                ...prevState,
                                [id]: classes.menuItemVisible
                            }));
                        }, Number(id) * 200 + 1000);
                        setTimeout(() => {
                            setIsProlog(true);
                            dispatch(modifyFooter(true));
                        }, 2200);
                    });
                }, 1700);
            }, 1000);
        } else {
            dispatch(modifyFooter(true));
            setIsProlog(true);
        }
    }, []);

    return (
        <div
            className={
                classes.mainPageWrap +
                ' ' +
                (isVisible ? classes.visible : classes.invisible)
            }
        >
            <Burger handleFade={crossfade} isMainPage={true} />
            <div className={classes.mainTitleWrap}>
                <div className={classes.mainTitle + ' ' + titleStyle}>
                    Норильск,
                </div>
                <div className={classes.mainSubTitle + ' ' + titleStyle}>
                    <span className='no_wrap'>который мы увозим с собой</span>
                </div>
                <div className={classes.mainDescription + ' ' + titleStyle}>
                    Проект Медиашколы в Заполярье
                </div>
            </div>
            <div className={classes.starWrap}>
                <img className={starStyle} src={star} alt='star' />
            </div>
            <div className={classes.mainPageMenu}>
                {menu.map(({ id, name, link }) => (
                    <div
                        key={id}
                        className={classes.menuItem + ' ' + menuItemStyle[id]}
                        onClick={() => crossfade(link)}
                    >
                        <span className='no_wrap'>{name}</span>
                    </div>
                ))}
            </div>
            {isProlog && <Prolog />}
        </div>
    );
};
export default MainPageContent;
