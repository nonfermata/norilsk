import React, { useState } from 'react';
import classes from './prolog.module.css';
import AnimationArrow from '../../../common/animationArrow/animationArrow';

const Prolog = () => {
    const [prologVisibility, setPrologVisibility] = useState(false);
    const handlePrologStatus = () => {
        setPrologVisibility((prevState) => !prevState);
    };
    return (
        <div className={classes.prologWrap}>
            <div
                className={
                    classes.prologTextBlock +
                    ' ' +
                    (prologVisibility && classes.prologVisible)
                }
            >
                ...несколько слов короткого приветствия, про уникальную книгу о
                Норильске, переведенную в web-формат, один абзац, либо два
                маленьких, до 400 знаков
            </div>
            <div className={classes.prologBtnWrap}>
                <AnimationArrow
                    onClick={handlePrologStatus}
                    arrowDown={prologVisibility}
                />
            </div>
        </div>
    );
};

export default Prolog;
