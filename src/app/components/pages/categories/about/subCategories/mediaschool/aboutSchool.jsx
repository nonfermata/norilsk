import React from 'react';
import classes from './mediaschool.module.css';
import { Link } from 'react-router-dom';
import mediaschool from '../../../../../../data/mediaschool';

const AboutSchool = () => {
    const { text, photos } = mediaschool.official;
    return (
        <>
            <div className={classes.blockTitleHead}>
                <div className={classes.blockTitle}>О школе</div>
                <span className='fw300 grey'>|</span>
                <Link to='time-for-school' className={classes.blockLink}>
                    Пора <span className='no_wrap'>в школу!</span>
                </Link>
            </div>
            <div className={classes.infoBlock}>
                <img
                    key='keyTopImg'
                    className={classes.officialImage}
                    src={photos[8]}
                    alt='Image'
                />
                {text.map((item, index) => (
                    <>
                        <div key={item} className={classes.baseText}>
                            {item}
                        </div>
                        <img
                            key={item + 'keyImg'}
                            className={classes.officialImage}
                            src={photos[index]}
                            alt='Image'
                        />
                    </>
                ))}
                <div className={classes.noCharge}>
                    Обучение в Медиашколе в&nbsp;Заполярье{' '}
                    <span className='fw600'>бесплатное</span>.
                </div>
            </div>
        </>
    );
};

export default AboutSchool;
