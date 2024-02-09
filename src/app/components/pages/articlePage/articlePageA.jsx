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
        vrezka,
        chapters,
        // subArticles,
        ps,
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
                    className={classes.titleSubtitleWrap}
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
            {vrezka && (
                <div className={classes.vrezkaWrap}>
                    <div className={classes.vrezka}>{vrezka}</div>
                </div>
            )}
            {chapters.map(({ title, author, text }) => (
                <div key={title} className={classes.chapterWrap}>
                    {!isSingle && (
                        <div className={classes.chapterTitle}>{title}</div>
                    )}
                    <div className={classes.chapterAuthor}>
                        Текст: <span className='fw500'>{author}</span>
                    </div>
                    <div className={classes.chapterText}>
                        {text.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        {ps && <p className={classes.ps}>{ps}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticlePageA;
