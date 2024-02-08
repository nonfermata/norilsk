import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Locations from './locations/locations';
import About from './about/about';
import Symbols from './symbols/symbols';
import Menu from '../../ui/menu/menu';
import { useNavigate } from 'react-router-dom';
import { getBgr } from '../../../../redux/bgrImgReducer';

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
            navigate(link);
        }, 200);
    };
    return (
        <div className={'pageWrap ' + (isVisible ? 'visible' : 'invisible')}>
            <div
                className='pageBgr'
                style={{ backgroundImage: 'url(' + bgrImg + ')' }}
            ></div>
            <Menu handleFade={crossfade} />
            {category === 'about' && <About />}
            {category === 'locations' && <Locations />}
            {category === 'symbols' && <Symbols />}
        </div>
    );
};

export default Category;
