import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArticlePage from '../../articlePage/articlePage';
import locationsBgr from '../../../../assets/images/locations-bgr.png';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import classes from '../category.module.css';
import scrollToTop from '../../../../utils/scrollToTop';
import getCategoryList from '../../../../utils/getCategoryList';

const Locations = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const locationsList = getCategoryList('locations');
    const { location } = useParams();
    if (!location) {
        dispatch(setBrg(locationsBgr));
    }
    const [isVisible, setIsVisible] = useState(false);
    const [rerender, setRerender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1);
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
                    <div className='titleCategory'>Места</div>
                    {/*<ul className={classes.tempList}>*/}
                    {/*    {locationsList.map(({ id, name, mainTitle }) => (*/}
                    {/*        <li key={id} onClick={() => crossfade(name)}>*/}
                    {/*            {mainTitle}*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                    <div className={classes.iconsWrap}>
                        {locationsList.map(({ id, name, mainTitle, icon }) => (
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
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Locations;
