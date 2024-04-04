import React from 'react';
import classes from './mediaschool.module.css';
import { Link } from 'react-router-dom';
import mediaschool from '../../../../../../data/mediaschool';

const SchoolOfficial = () => {
    const { text, photos } = mediaschool.official;
    return (
        <>
            <div className={classes.blockTitleHead}>
                <div className={classes.blockTitle}>О школе</div>
                <span className='fw300 grey'>|</span>
                <Link to='nonofficial' className={classes.blockLink}>
                    Прийти <span className='no_wrap'>в школу</span>
                </Link>
            </div>
            <div className={classes.infoBlock}>
                {text.map((item, index) => (
                    <>
                        <div key={index} className={classes.baseText}>
                            {item}
                        </div>
                        <img
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

export default SchoolOfficial;
