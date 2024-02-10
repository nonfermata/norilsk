import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArticlePageA from '../../articlePage/articlePageA';
import locationsBgr from '../../../../assets/images/locations-bgr.png';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import allBook from '../../../../data/book/allBook';
import classes from '../category.module.css';
import scrollToTop from '../../../../utils/scrollToTop';

const Locations = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const locationsList = allBook.filter((item) => item.cat === 'locations');
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
                <ArticlePageA articleName={location} />
            ) : (
                <>
                    <div className='titleCategory'>Места</div>
                    <ul className={classes.tempList}>
                        {locationsList.map(({ id, name, mainTitle }) => (
                            <li key={id} onClick={() => crossfade(name)}>
                                {mainTitle}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Locations;
