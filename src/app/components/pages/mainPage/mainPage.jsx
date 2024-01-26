import React, { useEffect, useState } from 'react';
import classes from './mainPage.module.css';
import star from '../../../assets/images/star.png';
import menu from '../../../data/menu';

const MainPage = () => {
    const [starStyle, setStarStyle] = useState(classes.starImagePos1);
    const [titleStyle, setTitleStyle] = useState(classes.titleInvisible);
    const [mainImageStyle, setMainImageStyle] = useState();
    const [menuItemStyle, setMenuItemStyle] = useState(
        menu.map(({ id }) => ({ [id]: '' }))
    );
    useEffect(() => {
        setMainImageStyle(classes.mainImageVisible);
        setTimeout(() => {
            setTitleStyle(classes.titleVisible);
            setTimeout(() => {
                setStarStyle(classes.starImagePos2);
                setTimeout(() => {
                    setStarStyle(classes.starImagePos3);
                    setTimeout(() => {
                        setStarStyle(classes.starImagePos2);
                        menu.forEach(({ id }) => {
                            setTimeout(() => {
                                setMenuItemStyle((prevState) => ({
                                    ...prevState,
                                    [id]: classes.menuItemVisible
                                }));
                            }, Number(id) * 200);
                        });
                    }, 300);
                }, 500);
            }, 1700);
        }, 1000);
    }, []);
    return (
        <div className={classes.mainPageWrap + ' ' + mainImageStyle}>
            <div className={classes.mainTitleWrap}>
                <div className={classes.mainTitle + ' ' + titleStyle}>
                    Норильск,
                </div>
                <div className={classes.mainSubTitle + ' ' + titleStyle}>
                    <span className='no_wrap'>который мы увозим с собой</span>
                </div>
            </div>
            <div className={classes.starWrap}>
                <img className={starStyle} src={star} alt='star' />
            </div>
            <div className={classes.mainPageMenu}>
                {menu.map(({ id, name }) => (
                    <div
                        key={id}
                        className={classes.menuItem + ' ' + menuItemStyle[id]}
                    >
                        <span className='no_wrap'>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MainPage;
