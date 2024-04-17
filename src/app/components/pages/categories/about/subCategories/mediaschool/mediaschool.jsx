import React from 'react';
import classes from './mediaschool.module.css';
import { useParams } from 'react-router-dom';
import TimeForSchool from './TimeForSchool';
import AboutSchool from './aboutSchool';

const Mediaschool = () => {
    const { schoolBlockName } = useParams();
    return (
        <div className={classes.mediaschoolWrap}>
            {schoolBlockName === 'time-for-school' ? (
                <TimeForSchool />
            ) : (
                <AboutSchool />
            )}
        </div>
    );
};

export default Mediaschool;
