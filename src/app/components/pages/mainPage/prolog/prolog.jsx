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
                вступительное слово вступительное слово вступительное слово
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid at beatae, dolorum ducimus eligendi esse et
                exercitationem, explicabo, fugiat id provident rerum saepe sit
                tempora totam unde ut. A, accusamus doloremque eaque eius
                facilis fugit nesciunt odio perferendis quidem, quo
                reprehenderit sequi vel, veniam. Adipisci alias aperiam beatae
                blanditiis consectetur delectus dicta dolorum eligendi eos error
                est expedita fuga ipsam laudantium maiores molestiae.
            </div>
            <div className={classes.prologBtnWrap}>
                <AnimationArrow
                    onClick={handlePrologStatus}
                    arrowDown={prologVisibility}
                />
            </div>
            {/*<button onClick={handlePrologStatus} className={classes.prologBtn}>*/}
            {/*    BUTTON*/}
            {/*</button>*/}
        </div>
    );
};

export default Prolog;
