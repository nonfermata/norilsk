/* eslint-disable indent */

import React, { useState } from 'react';
import classes from '../category.module.css';
import geomark from '../../../common/svg/geomark';

const Mark = ({ location, crossfade, startMarksStyle }) => {
    const [titleStyle, setTitleStyle] = useState('');
    const { id, geo, mainTitle, name } = location;
    const handleHover = () => {
        setTitleStyle(classes.geoTitleHover);
    };
    const handleOut = () => {
        setTitleStyle('');
    };
    return (
        <div
            onMouseOver={handleHover}
            onMouseOut={handleOut}
            onClick={() => crossfade(name)}
            className={classes.geoNone + ' ' + startMarksStyle}
            style={{
                top: geo.top + '%',
                left: geo.left + '%'
            }}
        >
            {geomark}
            <div
                className={classes.geoTitle + ' ' + titleStyle}
                style={
                    id === '40' || id === '44' || id === '10' || id === '12'
                        ? {
                              right: '80%',
                              left: 'initial'
                          }
                        : {}
                }
            >
                {mainTitle}
            </div>
        </div>
    );
};

export default Mark;
