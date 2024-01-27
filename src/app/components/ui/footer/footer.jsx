import React from 'react';
import { useSelector } from 'react-redux';
import classes from './footer.module.css';
import { getFooterStatus } from '../../../../redux/footerReducer';

const Footer = () => {
    const isFooter = useSelector(getFooterStatus());

    return (
        <div
            className={
                classes.footerWrap + ' ' + (isFooter && classes.footerVisible)
            }
        >
            Footer
        </div>
    );
};

export default Footer;
