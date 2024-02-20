/* eslint-disable indent */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './articlePage.module.css';
import allBook from '../../../data/book/allBook';
import { setBrg } from '../../../../redux/bgrImgReducer';
import vinietka from '../../../assets/images/vinietka.png';
import ArticlesNav from '../../ui/articlesNav/articlesNav';

const ArticlePageA = ({ articleName, handleFade }) => {
    const [artTitles, setArtTitles] = useState({});
    useEffect(() => {
        setArtTitles({});
        setTimeout(() => {
            setArtTitles({
                title: classes.titleArticle,
                subTitle: classes.subTitle
            });
        }, 11);
    }, [articleName]);
    const dispatch = useDispatch();
    const article = allBook.find((item) => articleName === item.name);
    const {
        id,
        // name,
        // type,
        // cat,
        mainTitle,
        subTitle,
        vrezka,
        chapters,
        subArticles,
        ps,
        mainImg,
        bgrImg,
        photoAuthor
    } = article;
    const isSingle = chapters.length === 1;
    dispatch(setBrg(''));
    return (
        <div className={classes.articlePageWrap}>
            <div className={classes.articleHead}>
                <div className={classes.articlesNavWrap}>
                    <ArticlesNav
                        currentArticleId={id}
                        handleFade={handleFade}
                    />
                </div>
                <div
                    className={classes.titleSubtitleWrap}
                    style={{ backgroundImage: 'url(' + bgrImg + ')' }}
                >
                    <div className={artTitles.title}>{mainTitle}</div>
                    <div className={artTitles.subTitle}>
                        {isSingle ? chapters[0].title : subTitle}
                    </div>
                </div>
                <img
                    className={classes.mainImgWrap}
                    src={mainImg}
                    alt={mainTitle}
                />
            </div>
            {vrezka && (
                <div className={classes.vrezkaWrap}>
                    <div className={classes.vrezka}>{vrezka}</div>
                </div>
            )}
            {photoAuthor && (
                <div className={classes.photoAuthor}>
                    Фотографии: <span className='fw500'>{photoAuthor}</span>
                </div>
            )}
            {chapters.map(({ title, author, text, monoImg, rgbImg }, index) => (
                <div key={title} className={classes.chapterWrap}>
                    {!isSingle && (
                        <div className={classes.chapterTitle}>{title}</div>
                    )}
                    <div className={classes.chapterAuthor}>
                        Текст: <span className='fw500'>{author}</span>
                    </div>
                    <div className={classes.chapterText}>
                        {text.map((item, pIndex, arr) => (
                            <>
                                {pIndex === 1 && monoImg && (
                                    <img
                                        className={classes[monoImg.orient]}
                                        src={monoImg.src}
                                        alt='image'
                                    />
                                )}
                                {!subArticles &&
                                    rgbImg &&
                                    pIndex === arr.length - rgbImg.order && (
                                        <img
                                            className={classes[rgbImg.orient]}
                                            src={rgbImg.src}
                                            alt='image'
                                        />
                                    )}
                                <p key={pIndex}>{item}</p>
                            </>
                        ))}
                        {subArticles && (
                            <img
                                className={classes.imgCenter}
                                src={rgbImg.src}
                                alt='image'
                            />
                        )}
                        {ps && <p className={classes.ps}>{ps}</p>}
                    </div>
                    {subArticles &&
                        subArticles.map((item, index) => (
                            <div key={index} className={classes.subArticleWrap}>
                                <div className={classes.subArticleTitle}>
                                    {item.title}
                                </div>
                                <div className={classes.subArticleText}>
                                    {item.text}
                                </div>
                            </div>
                        ))}
                    <img
                        src={vinietka}
                        className={classes.vinietka}
                        alt='Vinietka'
                    />
                    {chapters.length - 1 !== index && (
                        <div className={classes.endLine}></div>
                    )}
                </div>
            ))}
            <div
                className={
                    classes.articlesNavWrap +
                    ' ' +
                    classes.articlesNavWrapBottom
                }
            >
                <ArticlesNav currentArticleId={id} handleFade={handleFade} />
            </div>
        </div>
    );
};

export default ArticlePageA;
