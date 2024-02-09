import taxiBgr from '../../assets/images/articles/bgr/56_taxi_bgr.png';
import taxi0 from '../../assets/images/articles/56_taxi_0.png';
import taxi1 from '../../assets/images/articles/56_taxi_1.png';

const taxi = {
    id: '56',
    name: 'taxi',
    cat: 'symbols',
    type: 'A',
    mainTitle: 'Такси',
    subTitle: '*** подзаголовок ***',
    vrezka: 'Такси для норильчан намного актуальнее, чем для жителей всех остальных российских городов.',
    chapters: [
        {
            title: 'Кино и страшные истории',
            author: 'Арина Мышева',
            text: ['']
        },
        {
            title: 'Покоритель женских сердец',
            author: 'Кирилл Женовачёв',
            text: ['']
        }
    ],
    mainImg: taxi0,
    bgrImg: taxiBgr,
    images: [taxi1]
};

export default taxi;
