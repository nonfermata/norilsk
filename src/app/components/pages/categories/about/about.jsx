import React from 'react';
import aboutBgr from '../../../../assets/images/about-bgr.png';
import classes from './about.module.css';
import { useDispatch } from 'react-redux';
import { setBrg } from '../../../../../redux/bgrImgReducer';

const About = () => {
    const dispatch = useDispatch();
    dispatch(setBrg(aboutBgr));
    return (
        <>
            <div className='titleCategory'>О проекте</div>
            <p className={classes.vrezka}>
                Город, который мы, возможно, покидаем навсегда, по словам
                замечательного поэта Зои Ященко, становится «памятью, музыкой,
                жестом…»
            </p>
            <p className={classes.vrezka}>
                Книга про Норильск, которую вы держите в руках, именно из этого
                и состоит — из музыки и жестов . . . . . . . . . . . . . . . .
            </p>
            <p className={classes.vrezka}>. . . . . . . . . . . . . . . .</p>
        </>
    );
};

export default About;
