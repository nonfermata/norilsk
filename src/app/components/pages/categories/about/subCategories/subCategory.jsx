import React from 'react';
import subMenu from '../../../../../data/subMenu';
import Creators from './creators/creators';
import Mediaschool from './mediaschool/mediaschool';
import Others from './others/others';
import Gorod from './gorod/gorod';

const SubCategory = ({ subCatName }) => {
    const subCat = subMenu.find((item) => item.link === subCatName);
    const { name, title } = subCat;
    return (
        <>
            <div className='titleSubCategory'>{title || name}</div>
            {subCatName === 'creators' && <Creators />}
            {subCatName === 'mediaschool' && <Mediaschool />}
            {subCatName === 'gorod' && <Gorod />}
            {subCatName === 'others' && <Others />}
        </>
    );
};

export default SubCategory;
