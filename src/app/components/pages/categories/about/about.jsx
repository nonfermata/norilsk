import React from 'react';
import aboutBgr from '../../../../assets/images/about-bgr.png';
import classes from './about.module.css';
import { useDispatch } from 'react-redux';
import { setBrg } from '../../../../../redux/bgrImgReducer';
import about from '../../../../data/book/02_about';
import rightImg from '../../../../assets/images/about-right.png';
import SubMenu from './subMenu/subMenu';
import { useParams } from 'react-router-dom';
import SubCategory from './subCategories/subCategory';
import audioGorod from '../../../../assets/audio/neobitaemy-gorod.mp3';

const About = () => {
    const { subCutName } = useParams();
    const dispatch = useDispatch();
    dispatch(setBrg(aboutBgr));
    const { vrezka, text } = about;
    return (
        <>
            <div className={classes.audioBox}>
                <audio controls autoPlay src={audioGorod}></audio>
            </div>
            <div className={classes.aboutWrap}>
                <div className={classes.aboutLeftContent}>
                    <div className={classes.catHeadWrap}>
                        <div className='titleCategory'>О проекте</div>
                        <SubMenu />
                    </div>
                    {subCutName ? (
                        <SubCategory subCatName={subCutName} />
                    ) : (
                        <>
                            <p className={classes.vrezka}>{vrezka}</p>
                            <div className={classes.text}>
                                {text.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                            <div className={classes.endLine}></div>
                            <div className={classes.thanks}>
                                Медиашкола Игоря Попова в Заполярье выражает
                                искреннюю благодарность за многолетнюю поддержку
                                и помощь департаменту общественных связей
                                компании «Норникель», медиакомпании «Северный
                                город» и лично Андрею Кирпичникову, Сергею
                                Панченко, Татьяне Смирновой, Занде Бусловой,
                                Вере Калабековой, Артуру Калабекову и Вере
                                Скорницкой!
                            </div>
                            <div className={classes.dedication}>
                                Эту книгу мы посвящаем памяти нашего большого
                                друга и замечательного человека{' '}
                                <span className='fw600'>
                                    Сергея Николаевича Панченко.
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <div className={classes.aboutRightContent}>
                    <img src={rightImg} alt='image' />
                </div>
            </div>
        </>
    );
};

export default About;
