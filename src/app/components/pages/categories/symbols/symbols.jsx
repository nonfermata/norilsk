import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArticlePage from '../../articlePage/articlePage';
import symbolsBgr from '../../../../assets/images/symbols-bgr.png';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import classes from '../category.module.css';
import getCategoryList from '../../../../utils/getCategoryList';
import scrollToTop from '../../../../utils/scrollToTop';

const Symbols = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const symbolsList = getCategoryList('symbols');
    const { symbol } = useParams();
    if (!symbol) {
        dispatch(setBrg(symbolsBgr));
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
            {symbol ? (
                <ArticlePage articleName={symbol} handleFade={crossfade} />
            ) : (
                <>
                    <div className='titleCategory'>Символы</div>
                    <div className={classes.iconsWrap}>
                        {symbolsList.map(({ id, name, mainTitle, icon }) => (
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

export default Symbols;
