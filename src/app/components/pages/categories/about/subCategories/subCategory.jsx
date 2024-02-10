import React from 'react';
import subMenu from '../../../../../data/subMenu';
import Creators from './creators/creators';
import Mediaschool from './mediaschool/mediaschool';
import Others from './others/others';

const SubCategory = ({ subCatName }) => {
    const subCat = subMenu.find((item) => item.link === subCatName);
    const { name } = subCat;
    return (
        <>
            <div className='titleSubCategory'>{name}</div>
            {subCatName === 'creators' && <Creators />}
            {subCatName === 'mediaschool' && <Mediaschool />}
            {subCatName === 'others' && <Others />}
        </>
    );
};

export default SubCategory;
