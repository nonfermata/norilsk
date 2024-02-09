import arenaBgr from '../../assets/images/articles/bgr/08_arena_bgr.png';
import arena0 from '../../assets/images/articles/08_arena_0.png';
import arena1 from '../../assets/images/articles/08_arena_1.png';
import arenaMono from '../../assets/images/articles/08_arena_mono.png';

const arena = {
    id: '08',
    name: 'arena',
    cat: 'locations',
    type: 'A',
    mainTitle: '«Арена»',
    subTitle: '*** подзаголовок ***',
    chapters: [
        {
            title: 'Книги, скамейки и первая зарплата',
            author: 'Юрий Коцарь',
            text: [
                'Мое любимое место в Норильске — торгово-развлекательный центр «Арена». Все, что мне нужно, тут есть. Скамейки, где можно сесть и расслабиться за чтением книжки. (Очень маловероятно, что к тебе кто-то подсядет и будет мешать.) Книжный магазин, который я регулярно посещаю. На третьем этаже много разных кафешек, в одной из которых я подрабатывал и получил свои первые деньги. Еще мне нравится огромная спиралеобразная лестница, каких в Москве, может быть, неисчислимо много, а для Норильска это большая редкость.',
                '«Арена» строилась больше двух лет. Еще тогда я часто ходил и смотрел, как продвигается процесс. Иногда я думал, что нас обманывают и, если мы и увидим этот торговый центр, то только к старости. Но нет, вот он — построен! И я очень тепло к нему отношусь.'
            ]
        },
        {
            title: 'Аквапарк, булочки, задушевные разговоры…',
            author: 'Екатерина Скляренко',
            text: [
                'Норильчанам известно, какие лютые морозы у нас бывают, но ведь подросткам все равно хочется отдыхать и проводить время с друзьями! На материке можно гулять в парках, кататься на коньках под открытым небом, а нам приходится прятаться от сильных ветров. Мест для общения немного. Одно из самых подходящих — торговый центр «Арена». Его любят многие мои сверстники. Здесь тепло, уютно; можно сходить в аквапарк, прикупить новой одежды, найти для себя хорошие книги и, конечно же, вкусно перекусить знаменитыми булочками Cinnabon. Еще в будни мы с друзьями договариваемся о поездке сюда из моего Талнаха, заранее составляем план, куда пойдем сначала, что купим и что съедим. Дни проходят в сладостном ожидании, но наконец мы оказываемся в «Арене» и проводим здесь целый выходной день, рассматривая витрины магазинов и разговаривая обо всем на свете.'
            ]
        }
    ],
    mainImg: arena0,
    bgrImg: arenaBgr,
    monoImg: arenaMono,
    images: [arena1]
};

export default arena;
