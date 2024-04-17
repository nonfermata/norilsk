import React from 'react';
import classes from './creators.module.css';
import creators from '../../../../../../data/creators';

const Creators = () => {
    return (
        <div className={classes.personsWrap}>
            {creators.map(({role, name}) => (
                <div key={role} className={classes.personWrap}>
                    <div className={classes.personRole}>{role}</div>
                    <div className={classes.personName}>{name}</div>
                </div>
            ))}
        </div>
    );
};

export default Creators;
