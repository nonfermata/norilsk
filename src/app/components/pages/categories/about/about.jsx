import React from 'react';
import aboutBgr from '../../../../assets/images/about-bgr.png';
import classes from './about.module.css';
import { useDispatch } from 'react-redux';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import about from '../../../../data/about';
import rightImg from '../../../../assets/images/about-right.png';
import SubMenu from './subMenu/subMenu';
import { useParams } from 'react-router-dom';
import SubCategory from './subCategories/subCategory';
import audioGorod from '../../../../assets/audio/neobitaemy-gorod.mp3';

const About = () => {
    const { subCutName, schoolBlockName } = useParams();
    const dispatch = useDispatch();
    dispatch(setBrg(aboutBgr));
    const { vrezka, text } = about;
    return (
        <>
            <div className={classes.audioBox}>
                <audio controls src={audioGorod}></audio>
            </div>
            <div className={classes.aboutWrap}>
                <div className={classes.aboutLeftContent}>
                    <div className={classes.catHeadWrap}>
                        <SubMenu />
                        <div className='titleCategory'>О проекте</div>
                    </div>
                    {subCutName ? (
                        <SubCategory subCatName={subCutName} />
                    ) : (
                        <>
                            <p className={classes.vrezka}>{vrezka}</p>
                            <div className={classes.text}>
                                {text.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                            <div className={classes.endLine}></div>
                            <div className={classes.thanks}>
                                Медиашкола Игоря Попова в&nbsp;Заполярье
                                выражает искреннюю благодарность за многолетнюю
                                поддержку и помощь департаменту общественных
                                связей компании «Норникель», медиакомпании
                                «Северный город» и&nbsp;лично Андрею
                                Кирпичникову, Сергею Панченко, Татьяне
                                Смирновой, Занде Бусловой, Елене Олеговне
                                Сергеевой, Вере Калабековой, Артуру Калабекову,
                                Вере Скорницкой и&nbsp; Ирине Золотухиной!
                            </div>
                            <div className={classes.dedication}>
                                Эту книгу мы посвящаем памяти нашего большого
                                друга и&nbsp;замечательного человека{' '}
                                <span className='fw600'>
                                    Сергея Николаевича Панченко.
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <div className={classes.aboutRightContent}>
                    <img src={rightImg} alt='image' />
                    {subCutName === 'mediaschool' && (
                        <>
                            <img src={rightImg} alt='image' />
                            <img src={rightImg} alt='image' />
                            {!schoolBlockName && (
                                <>
                                    <img src={rightImg} alt='image' />
                                    <img src={rightImg} alt='image' />
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default About;
