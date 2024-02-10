import React from 'react';
import classes from './creators.module.css';
import { useDispatch } from 'react-redux';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import creatorsBgr from '../../../../assets/images/creators-bgr.png';
import creators from '../../../../data/creators';

const Creators = () => {
    const dispatch = useDispatch();
    dispatch(setBrg(creatorsBgr));

    return (
        <>
            <div className='titleCategory'>Создатели проекта</div>
            <div className={classes.creatorsWrap}>
                {creators.map(({ role, name }) => (
                    <div key={role} className={classes.personWrap}>
                        <div className={classes.personRole}>{role}</div>
                        <div className={classes.personName}>{name}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Creators;
