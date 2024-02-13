import React from 'react';
import classes from './zaglushka.module.css';

const Zaglushka = () => {
    let word = prompt('Введите заветное слово:');
    while (word !== 'Выдра') {
        word = prompt('Это не оно. Введите заветное слово:');
    }
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
