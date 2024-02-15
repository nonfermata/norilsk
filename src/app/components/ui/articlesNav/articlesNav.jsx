import React from 'react';
import classes from './articlesNav.module.css';
import allBook from '../../../data/book/allBook';
import getCategoryList from '../../../utils/getCategoryList';

const ArticlesNav = ({ currentArticleId, handleFade }) => {
    const currentArticle = allBook.find((item) => item.id === currentArticleId);
    const catList = getCategoryList(currentArticle.cat);
    const index = catList.findIndex((item) => item.id === currentArticleId);
    const isFirstArticle = index === 0;
    const isLastArticle = index === catList.length - 1;
    return (
        <div className={classes.navButtonsWrap}>
            <button
                title={!isFirstArticle && catList[index - 1].mainTitle}
                className={
                    classes.navButton +
                    ' ' +
                    (isFirstArticle && classes.navButtonDisabled)
                }
                disabled={isFirstArticle}
                onClick={() =>
                    handleFade(
                        '/' + currentArticle.cat + '/' + catList[index - 1].name
                    )
                }
            >
                <span className={classes.arrow}>&lt;</span> Предыдущая
            </button>
            |
            <button
                title={!isLastArticle && catList[index + 1].mainTitle}
                className={
                    classes.navButton +
                    ' ' +
                    (isLastArticle && classes.navButtonDisabled)
                }
                disabled={isLastArticle}
                onClick={() =>
                    handleFade(
                        '/' + currentArticle.cat + '/' + catList[index + 1].name
                    )
                }
            >
                Следующая <span className={classes.arrow}>&gt;</span>
            </button>
        </div>
    );
};

export default ArticlesNav;
