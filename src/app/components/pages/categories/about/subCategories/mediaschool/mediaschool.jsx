import React from 'react';
import classes from './mediaschool.module.css';
import { useParams } from 'react-router-dom';
import SchoolNonofficial from './schoolNonofficial';
import SchoolOfficial from './schoolOfficial';

const Mediaschool = () => {
    const { schoolBlockName } = useParams();
    return (
        <div className={classes.mediaschoolWrap}>
            {schoolBlockName === 'nonofficial' ? (
                <SchoolNonofficial />
            ) : (
                <SchoolOfficial />
            )}
        </div>
    );
};

export default Mediaschool;
