import React from 'react';
import classes from './subMenu.module.css';
import subMenu from '../../../../../data/subMenu';
import { Link } from 'react-router-dom';

const SubMenu = () => {
    return (
        <div className={classes.subMenuWrap}>
            {subMenu.map(({ id, name, link }) => (
                <Link to={'/about/' + link} key={id} className='menuLink subMenuLink'>
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default SubMenu;
