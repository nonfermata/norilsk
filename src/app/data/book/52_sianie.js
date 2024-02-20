import sianieBgr from '../../assets/images/articles/bgr/52_sianie_bgr.png';
import sianie0 from '../../assets/images/articles/52_sianie_0.png';
import sianie1 from '../../assets/images/articles/52_sianie_1.png';
import sianieMono from '../../assets/images/articles/52_sianie_mono.png';

const sianie = {
    id: '52',
    name: 'sianie',
    cat: 'symbols',
    type: 'A',
    mainTitle: 'Северное сияние',
    subTitle: 'Волшебство для каждого',
    chapters: [
        {
            title: 'Дорога в потусторонний мир',
            author: 'Анна Рогачёва',
            text: [
                'Когда мне было лет десять, мы с родителями пошли на зимнюю вечернюю прогулку. Стояла волшебная погода. Снег падал крупными хлопьями, а небольшой ветер сдувал их с пути. Был декабрь, люди куда-то спешили в предновогодней суете, всюду сияли разноцветные огни, в воздухе стоял запах чего-то волшебного. И волшебство случилось — для меня! Я впервые в жизни увидела северное сияние!',
                'Оно выглядело как огромный зелено-белый путь в далекую тундру, по которому никто из живых не ходил. Может, это и есть дорога в потусторонний мир? Сияние было настолько захватывающим и величественным, что от переизбытка эмоций у меня пропал дар речи. Впрочем, через несколько минут я уже бегала по улице и кричала от восторга, попутно спрашивая маму с папой, что же это такое было. А они, хоть и смеялись над моей реакцией, тоже не отводили глаз от неба. Все вокруг стало мне казаться волшебным. И даже снег был уже не обычным, а походил на маленькие сказочные кристаллы.',
                'Сейчас я почти взрослая, северное сияние видела уже много раз, но все равно застываю, наслаждаясь небесным чудом, и продолжаю верить в его таинственное, сверхъестественное происхождение.'
            ],
            rgbImg: { src: sianie1, orient: 'imgHor', order: 2 }
        },
        {
            title: 'Слушай музыку неба…',
            author: 'Никита Макаров',
            text: [
                'Однажды в феврале мы с друзьями вышли на улицу после очередного занятия в Медиашколе. Время позднее, мне домой через час, Софа и я провожаем домой Полину. На улице темно и холодно. Мы свернули во двор и вдруг увидели прекрасное голубое северное сияние — эту беззвучную музыку неба. Оно было прямо над нами и простиралось в разные стороны. Недолго думая, мы легли на снег прямо посреди двора; задавит нас машина или нет — нам было все равно, будто мы дети лет семи.',
                ' Мы лежали и болтали, в моем кармане завибрировал телефон — аккумулятор сел, связи с родителями нет, надо идти, но хочется растянуть это восхитительное беззаботное мгновение. «Что скажет мама, когда я вернусь так поздно? Я подумаю об этом утром», — мысленно сказал я себе.',
                'Потом мы ехали в такси, звучала теп­лая английская песня. Общее молчание я прервал фразой: «Эта музыка идеальна для такого вечера». Мы пытались разобрать текст, водитель, услышав нас, прибавил громкости… Сквозь скрип колес мы уловили строчки: Wake me up, when September ends…'
            ],
            monoImg: { src: sianieMono, orient: 'monoImgNormal' }
        }
    ],
    mainImg: sianie0,
    bgrImg: sianieBgr
};

export default sianie;
