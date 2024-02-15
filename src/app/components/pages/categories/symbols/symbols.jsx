import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArticlePageA from '../../articlePage/articlePageA';
import symbolsBgr from '../../../../assets/images/symbols-bgr.png';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import classes from '../category.module.css';
import getCategoryList from '../../../../utils/getCategoryList';

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
            navigate(link);
        }, 200);
    };
    return (
        <div className={isVisible ? 'visible' : 'invisible'}>
            {symbol ? (
                <ArticlePageA articleName={symbol} handleFade={crossfade} />
            ) : (
                <>
                    <div className='titleCategory'>Символы</div>
                    <ul className={classes.tempList}>
                        {symbolsList.map(({ id, name, mainTitle }) => (
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

export default Symbols;
