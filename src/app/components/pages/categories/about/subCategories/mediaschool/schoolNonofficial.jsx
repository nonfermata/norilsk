import React from 'react';
import classes from './mediaschool.module.css';
import { Link } from 'react-router-dom';
import mediaschool from '../../../../../../data/mediaschool';
import vk from '../../../../../../assets/images/logotypes/vk_icon.png';

const SchoolNonofficial = () => {
    const { text, photos } = mediaschool.nonofficial;
    return (
        <>
            <div className={classes.blockTitleHead}>
                <Link to='/about/mediaschool' className={classes.blockLink}>
                    О школе
                </Link>
                <span className='fw300 grey'>|</span>
                <div className={classes.blockTitle}>
                    Прийти <span className='no_wrap'>в школу</span>
                </div>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.greetings}>Дорогие друзья!</div>
                {text.map((item, index) => (
                    <>
                        <div key={index} className={classes.baseText}>
                            {item.map((subItem, subIndex) => (
                                <div
                                    key={subIndex}
                                    className={
                                        classes.subPar +
                                        (subItem.includes('Приходите')
                                            ? ' fw600'
                                            : '')
                                    }
                                >
                                    {subItem}
                                </div>
                            ))}
                        </div>
                        <div className={classes.nonofficialImgWrap}>
                            <img
                                src={photos[(index + 1) * 2 - 2]}
                                alt='Image'
                            />
                            <img
                                src={photos[(index + 1) * 2 - 1]}
                                alt='Image'
                            />
                        </div>
                    </>
                ))}
                <div className={classes.coda}>
                    <div className={classes.welcome}>Ждем вас, друзья!</div>
                    <div className={classes.references}>
                        О начале нового сезона можно узнать в медиакомпании{' '}
                        <a
                            href='//sgnorilsk.ru/'
                            target='_blank'
                            rel='noreferrer'
                            title='Медиакомпания «Северный город»'
                        >
                            «Северный город»
                        </a>{' '}
                        и&nbsp;на наших страницах в&nbsp;социальных сетях.
                    </div>
                    <div className={classes.socialNets}>
                        <div className={classes.socialNet}>
                            <a
                                href='//vk.com/popovmedia'
                                target='_blank'
                                rel='noreferrer'
                                title='Медиашкола Игоря Попова в ВК'
                            >
                                <img
                                    src={vk}
                                    alt='вКонтакте'
                                    align='absbottom'
                                />
                            </a>
                            <a
                                href='//vk.com/popovmedia'
                                target='_blank'
                                rel='noreferrer'
                                title='Медиашкола Игоря Попова в ВК'
                            >
                                Мы BКонтакте
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolNonofficial;
