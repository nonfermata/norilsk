import karierBgr from '../../assets/images/articles/bgr/24_karier_bgr.png';
import karier0 from '../../assets/images/articles/24_karier_0.png';
import karier1 from '../../assets/images/articles/24_karier_1.png';
import karierMono from '../../assets/images/articles/24_karier_mono.png';
import karierIcon from '../../assets/images/icons/karier_icon.png';

const karier = {
    id: '24',
    name: 'karier',
    cat: 'locations',
    icon: karierIcon,
    geo: { top: 67, left: 3 },
    mainTitle: 'Карьер',
    chapters: [
        {
            title: 'Он — как многие люди: лучшее спрятано в глубине',
            author: 'Никита Сорокин',
            text: [
                'Мое любимое место, без которого я не могу себе представить Норильск (точнее, район Талнах), — карьер. Он связан у меня с  самыми приятными воспоминаниями: там я встретил первую любовь и познакомился с будущими друзьями.',
                'Карьер я однажды обнаружил, гуляя по неизведанным тогда просторам в районе смотровой площадки. Если быть максимально объективным, то все, что его окружает, — мусор. Бутылки, колеса от автомобилей, стекла и т. д. Однако огромное количество хлама никак не портит то, что находится чуть ниже. А там прекрасный пейзаж — большое скопление радующих взор пурпурных цветов, на которые хочется смотреть не отрываясь. Каждое лето мы с друзьями спускаемся в этот дивный новый мир и прекрасно проводим время: снимаем видеоролики, разговариваем о жизни и просто веселимся.',
                'Вообще, как я заметил, люди в большинстве своем такие же, как этот карьер. Изначально они могут показаться неприятными личностями, но, знакомясь с ними ближе, понимаешь, что самое прекрасное спрятано где-то глубоко — в их сердцах.',
                'Так что не стоит судить о местах и людях поверхностно — для объективности нужна глобальная информация. Кто знает, быть может, раздражавший вас когда-то человек в будущем станет тем, с кем вы проведете вместе всю оставшуюся жизнь?'
            ],
            monoImg: { src: karierMono, orient: 'monoImgNormal' },
            rgbImg: { src: karier1, orient: 'imgHor', order: 2 }
        }
    ],
    mainImg: karier0,
    bgrImg: karierBgr
};

export default karier;
