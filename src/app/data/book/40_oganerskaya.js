import oganerskayaBgr from '../../assets/images/articles/bgr/40_oganerskaya_bgr.png';
import oganerskaya0 from '../../assets/images/articles/40_oganerskaya_0.png';
import oganerskaya1 from '../../assets/images/articles/40_oganerskaya_1.png';
import oganerskayaMono from '../../assets/images/articles/40_oganerskaya_mono.png';
import oganerskayaIcon from '../../assets/images/icons/oganerskaya_icon.png';

const oganerskaya = {
    id: '40',
    name: 'oganerskaya',
    cat: 'locations',
    icon: oganerskayaIcon,
    mainTitle: 'Оганерская детская школа искусств',
    vrezka: 'Для меня любимое место города — родной зал ансамбля народного танца «Оганер», расположенный в детской школе искусств. Здесь учат танцевать, сюда я приходила на протяжении 10 лет. Зал наш большой, светлый, весь в зеркалах, и в нем чувствуется сила. Сила духа, сила движения, сила музыки. И мощнейшая сила семьи! Мы — ансамбль, мы — семья, а зал — наш дом.',
    chapters: [
        {
            title: 'Пространство танца',
            author: 'Анастасия Курносова',
            text: [
                'Тут забываешь все проблемы, ссоры и обиды. Здесь у тебя всего одна мысль и цель — танец. А чтобы танцевать, нужно собраться, настроиться на работу и откинуть все лишнее. Здесь выкладываешься на 100 процентов. В жизни были моменты, когда спасали только зал, музыка и танец. Я забывала про все, отстранялась от мира и танцевала. В ансамбле есть правило: все плохие эмоции ты оставляешь за стенами, а в зале только работа и упорство.',
                'Зал видел многое. Радостные лица девчонок, когда синхронно получилось вращение, и веселые улыбки ребят, когда после долгих и упорных тренировок вышла разножка или щучка. Видел боль, через которую мы продолжали танцевать и улыбаться, — ведь зритель не должен догадываться, как тебе больно, он должен наслаждаться танцем. Видел слезы, но не из-за неудачного падения, а от того, что не смог, не оправдал надежд, подвел товарищей.',
                'А сколько зал знает! Знает, что ты где-то недоделала дробь или поспешила с тактом. Что не все номера ты любишь одинаково. Что ты ненавидишь и проклинаешь всех вокруг, когда тебя не поставили в новый номер.',
                'Зал многое помнит. Как ты неумелыми еще ножками выстукивала дробь и от волнения намертво вцеплялась в  станок. Как думала бросить все, сбежать и никогда не возвращаться. Но потом успокаивалась и осознавала, что танцы — большая часть жизни и никуда от них не уйти.',
                'Перед выездным концертом зал наполняется разными костюмами, запахом косметики и небольшим волнением. Все бегают, собирают кофры, проверяют количество кокошников и платочков, состояние туфель и морально настраиваются на выступление. Зал нам помогает.',
                'Бывает, нашему коллективу нужно отрепетировать и выступить в другом зале, например во Дворце культуры комбината. Там прогонка идет совсем иначе, другие зеркала, другой пол, чужие стены…',
                'В такие моменты понимаешь, насколько все-таки любишь Свой Зал…'
            ],
            monoImg: { src: oganerskayaMono, orient: 'monoImgNormal' },
            rgbImg: { src: oganerskaya1, orient: 'imgHor', order: 4 }
        }
    ],
    mainImg: oganerskaya0,
    bgrImg: oganerskayaBgr,
    photoAuthor: 'МБУ ДО «Оганерская детская школа искусств»'
};

export default oganerskaya;
