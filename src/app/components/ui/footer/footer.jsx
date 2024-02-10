import React from 'react';
import { useSelector } from 'react-redux';
import classes from './footer.module.css';
import { getFooterStatus } from '../../../../redux/footerReducer';
import mediaschool from '../../../assets/images/logotypes/mediaschool-logo.png';
import nornikel from '../../../assets/images/logotypes/nornikel-logo.png';
import gorod from '../../../assets/images/logotypes/gorod-logo.png';

const Footer = () => {
    const isFooter = useSelector(getFooterStatus());

    return (
        <div
            className={
                classes.footerWrap + ' ' + (isFooter && classes.footerVisible)
            }
        >
            <a
                href='https://popovmedia.ru/'
                title='Медиашкола Игоря Попова'
                target='_blank'
                rel='noreferrer'
                className={classes.mediaschool}
            >
                <img src={mediaschool} alt='Медиашкола - logo' />
            </a>
            <a
                href='https://nornickel.ru/'
                title='Компания «Норникель»'
                target='_blank'
                rel='noreferrer'
                className={classes.nornikel}
            >
                <img src={nornikel} alt='Норникель - logo' />
            </a>
            <a
                href='https://sgnorilsk.ru/'
                title='Медиакомпания «Северный город»'
                target='_blank'
                rel='noreferrer'
                className={classes.gorod}
            >
                <img src={gorod} alt='Северный город - logo' />
            </a>
            <div className={classes.footerAddresses}>
                <p>Наш адрес: 663302, Красноярский край, </p>
                <p>г. Норильск, ул. Комсомольская, д. 33А</p>
                <p>E-mail: test@test.com </p>
            </div>
        </div>
    );
};

export default Footer;
