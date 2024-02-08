import theatreBgr from '../../assets/images/articles/bgr/58_theatre_bgr.png';
import theatre0 from '../../assets/images/articles/58_theatre_0.png';
import theatreMono from '../../assets/images/articles/58_theatre_mono.png';

const theatre = {
    id: '58',
    name: 'theatre',
    cat: 'locations',
    type: 'A',
    mainTitle: 'Театр драмы им. Владимира Маяковского',
    subTitle: '*** подзаголовок ***',
    chapters: [
        {
            title: 'Тут каждый становится аристократом',
            author: 'Юлия Исакова',
            text: ''
        },
        {
            title: '…А я танцевала здесь вальс любви!',
            author: 'Валерия Расадина',
            text: ''
        }
    ],
    subArticles: null,
    ps: null,
    mainImg: theatre0,
    bgrImg: theatreBgr,
    monoImg: theatreMono,
    images: [],
    photoAuthor: ''
};

export default theatre;
