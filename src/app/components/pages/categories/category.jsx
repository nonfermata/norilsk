import React, { useEffect, useState } from 'react';
import Locations from './locations/locations';
import About from './about/about';
import Symbols from './symbols/symbols';
import Header from '../../ui/header/header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBgr } from '../../../../redux/bgrImgReducer';
import scrollToTop from '../../../utils/scrollToTop';
import Creators from './about/subCategories/creators/creators';
import FooterMobile from '../../ui/footerMobile/footerMobile';

const Category = ({ category }) => {
    const navigate = useNavigate();
    const bgrImg = useSelector(getBgr());
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
        <div className={'pageWrap ' + (isVisible ? 'visible' : 'invisible')}>
            <div
                className='pageBgr'
                style={{ backgroundImage: 'url(' + bgrImg + ')' }}
            ></div>
            <Header handleFade={crossfade} />
            {category === 'about' && <About />}
            {category === 'locations' && <Locations />}
            {category === 'symbols' && <Symbols />}
            {category === 'creators' && <Creators />}
            <FooterMobile />
        </div>
    );
};

export default Category;
