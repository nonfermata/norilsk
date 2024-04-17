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
import geomark from '../../../common/svg/geomark';
import mapImg from '../../../../assets/images/map.png';

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
    const initialMarksStyles = locationsMarks.map((item) => ({
        id: item.id,
        value: ''
    }));
    const [marksStyles, setMarksStyles] = useState(initialMarksStyles);
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
    const handleHoverMark = (id) => {
        setMarksStyles((prevState) =>
            prevState.map((item) =>
                id === item.id
                    ? {
                          id,
                          value: classes.geoTitleHover
                      }
                    : item
            )
        );
    };
    const handleOutMark = () => {
        setMarksStyles(initialMarksStyles);
    };
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
            handleOutMark();
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
                            {locationsMarks.map(
                                ({ id, geo, mainTitle, name }, index) => (
                                    <div
                                        onMouseOver={() => handleHoverMark(id)}
                                        onMouseOut={handleOutMark}
                                        onClick={() => crossfade(name)}
                                        key={id}
                                        className={
                                            classes.geoNone +
                                            ' ' +
                                            startMarksStyles[index]
                                        }
                                        style={{
                                            top: geo.top + '%',
                                            left: geo.left + '%'
                                        }}
                                    >
                                        {geomark}
                                        <div
                                            className={
                                                classes.geoTitle +
                                                ' ' +
                                                marksStyles.find(
                                                    (item) => item.id === id
                                                ).value
                                            }
                                            style={
                                                id === '40' ||
                                                id === '44' ||
                                                id === '10' ||
                                                id === '12'
                                                    ? {
                                                          right: '80%',
                                                          left: 'initial'
                                                      }
                                                    : {}
                                            }
                                        >
                                            {mainTitle}
                                        </div>
                                    </div>
                                )
                            )}
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
