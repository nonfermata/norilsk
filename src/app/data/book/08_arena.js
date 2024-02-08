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
            text: ''
        },
        {
            title: 'Аквапарк, булочки, задушевные разговоры…',
            author: 'Екатерина Скляренко',
            text: ''
        }
    ],
    mainImg: arena0,
    bgrImg: arenaBgr,
    monoImg: arenaMono,
    images: [arena1]
};

export default arena;
