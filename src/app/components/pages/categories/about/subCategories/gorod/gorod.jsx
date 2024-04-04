import React from 'react';
import classes from './gorod.module.css';
import gorod from '../../../../../../data/gorod';
import gorodLogo from '../../../../../../assets/images/logotypes/gorod-logo.png';

const Gorod = () => {
    const { text, photos } = gorod;
    return (
        <div className={classes.gorodWrap}>
            {text.map((item, index) => (
                <>
                    <div key={index} className={classes.baseText}>
                        {item}
                    </div>
                    {index === 0 && (
                        <img
                            className={classes.mainPhoto}
                            src={photos[0]}
                            alt='Image'
                        />
                    )}
                </>
            ))}
            <a
                href='//sgnorilsk.ru/'
                target='_blank'
                rel='noreferrer'
                title='Медиакомпания «Северный город»'
                className={classes.logoWrap}
            >
                <img src={gorodLogo} alt='Logo' />
            </a>
        </div>
    );
};

export default Gorod;
