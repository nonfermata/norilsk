import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './articlePage.module.css';
import allBook from '../../../data/book/allBook';
import { setBrg } from '../../../../redux/bgrImgReducer';

const ArticlePageA = ({ articleName }) => {
    const dispatch = useDispatch();
    const article = allBook.find((item) => articleName === item.name);
    const {
        // id,
        // name,
        // cat,
        // type,
        mainTitle,
        subTitle,
        // vrezka,
        chapters,
        // mainImg,
        // subArticles,
        // ps,
        mainImg,
        bgrImg
        // monoImg,
        // images,
        // photoAuthor
    } = article;
    const isSingle = chapters.length === 1;
    dispatch(setBrg(''));
    return (
        <div className={classes.articlePageWrap}>
            <div className={classes.articleHead}>
                <img
                    className={classes.mainImgWrap}
                    src={mainImg}
                    alt={mainTitle}
                />
                <div
                    className={classes.titleVrezkaWrap}
                    style={{ backgroundImage: 'url(' + bgrImg + ')' }}
                >
                    {/*<pre>*/}
                    <div className={classes.titleArticle}>{mainTitle}</div>
                    {/*</pre>*/}
                    <div className={classes.subTitle}>
                        {isSingle ? chapters[0].title : subTitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePageA;
