import React from 'react';
import aboutBgr from '../../../../assets/images/about-bgr.png';
import classes from './about.module.css';
import { useDispatch } from 'react-redux';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import about from '../../../../data/book/02_about';
import rightImg from '../../../../assets/images/about-right.png';

const About = () => {
    const dispatch = useDispatch();
    dispatch(setBrg(aboutBgr));
    const { vrezka, text } = about;
    return (
        <div className={classes.aboutWrap}>
            <div className={classes.aboutLeftContent}>
                <div className='titleCategory'>О проекте</div>
                <p className={classes.vrezka}>{vrezka}</p>
                <div className={classes.text}>
                    {text.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <div className={classes.aboutRightContent}>
                <img src={rightImg} alt='image' />
            </div>
        </div>
    );
};

export default About;
