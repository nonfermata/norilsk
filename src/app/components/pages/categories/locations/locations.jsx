/* eslint-disable indent */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArticlePage from '../../articlePage/articlePage';
import locationsBgr from '../../../../assets/images/locations-bgr.png';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import classes from '../category.module.css';
import scrollToTop from '../../../../utils/scrollToTop';
import getCategoryList from '../../../../utils/getCategoryList';
import mapImg from '../../../../assets/images/map.png';
import Mark from './mark';

const Locations = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const locationsList = getCategoryList('locations');
    const locationsMarks = [...locationsList];
    locationsMarks.reverse();
    const { location } = useParams();
    if (!location) {
        dispatch(setBrg(locationsBgr));
    }
    const [isVisible, setIsVisible] = useState(false);
    const [rerender, setRerender] = useState(false);
    const initialStartMarks = locationsMarks.map(() => '');
    const [startMarksStyles, setStartMarksStyles] = useState(initialStartMarks);
    useEffect(() => {
        setStartMarksStyles(initialStartMarks);
    }, [location]);
    useEffect(() => {
        if (!startMarksStyles[startMarksStyles.length - 1]) {
            const index = startMarksStyles.findIndex((item) => !item);
            setTimeout(() => {
                setStartMarksStyles((prevState) =>
                    prevState.map((item, ind) =>
                        ind === index ? classes.geo : item
                    )
                );
            }, 50);
        }
    }, [startMarksStyles]);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 10);
    }, [rerender]);
    const crossfade = (link) => {
        setIsVisible(false);
        setTimeout(() => {
            setRerender((prevState) => !prevState);
            scrollToTop();
            navigate(link);
        }, 200);
    };
    return (
        <div className={isVisible ? 'visible' : 'invisible'}>
            {location ? (
                <ArticlePage articleName={location} handleFade={crossfade} />
            ) : (
                <>
                    <div className={classes.mapWrap}>
                        <div className={classes.map}>
                            <img src={mapImg} alt='Map' />
                            {locationsMarks.map((item, index) => (
                                <Mark
                                    key={item.id}
                                    location={item}
                                    crossfade={crossfade}
                                    startMarksStyle={startMarksStyles[index]}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classes.iconsLocationsMobile}>
                        <div className='titleCategory'>Места</div>
                        <div className={classes.iconsWrap}>
                            {locationsList.map(
                                ({ id, name, mainTitle, icon }) => (
                                    <div
                                        className={classes.iconWrap}
                                        key={id}
                                        title={mainTitle}
                                        onClick={() => crossfade(name)}
                                    >
                                        <img src={icon} alt='image' />
                                        <div className={classes.iconLabel}>
                                            {mainTitle}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Locations;
