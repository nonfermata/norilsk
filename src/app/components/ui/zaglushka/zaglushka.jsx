import React from 'react';
import classes from './zaglushka.module.css';

const Zaglushka = ({ setRunSite }) => {
    return (
        <div className={classes.zaglushkaWrap}>
            <p>Здравствуйте!</p>
            <p>
                Вы на сайте <strong className='blue'>norilsk-book.ru</strong>
            </p>
            <p>
                Сайт на стадии разработки.{' '}
                <span className='green'>
                    Скоро{' '}
                    <span
                        className={classes.secret}
                        onClick={() => setRunSite(true)}
                    >
                        всё
                    </span>{' '}
                    заработает!
                </span>
            </p>
        </div>
    );
};

export default Zaglushka;
