import dolgoeBgr from '../../assets/images/articles/bgr/42_dolgoe_bgr.png';
import dolgoe0 from '../../assets/images/articles/42_dolgoe_0.png';
import dolgoe1 from '../../assets/images/articles/42_dolgoe_1.png';
import dolgoeMono from '../../assets/images/articles/42_dolgoe_mono.png';
import dolgoeIcon from '../../assets/images/icons/dolgoe_icon.png';

const dolgoe = {
    id: '42',
    name: 'dolgoe',
    cat: 'locations',
    icon: dolgoeIcon,
    geo: { top: 86, left: 13 },
    mainTitle: 'Озеро Долгое',
    subTitle: 'Почувствовать себя по-настоящему живым',
    chapters: [
        {
            title: 'Индустриальный натурализм',
            author: 'Денис Кащеев',
            text: [
                'В Норильске мне особенно дорог берег озера Долгого. Тут мое уютное убежище, где зимой почти нет ветра, а летом приятно светит солнце. И даже во время дождя невероятно атмосферно. Здесь можно почувствовать вечность.',
                'Я называю это индустриальным натурализмом. Кругом, куда ни кинь взгляд, дымят заводы и шумят теплостанции. По трубам течет кипяток, как кровь промышленного гиганта. Кажется, что правит здесь человек, но природная красота водохранилища и гор как бы возвышается над человеческим, подчиняет его себе. Если бы на моем месте сидел поэт, он бы написал элегию природе. Если бы музыкант — сочинил бы блюз. Если бы писатель — его роман превозносил бы природу и был пропитан мизантропией. Художник написал бы все как есть, без прикрас.',
                'Я же просто превращаю свои чувства в мысли. Как люди находят покой со мной, так я нахожу свой покой в этом месте. Здесь я могу остановиться и подумать о вечном. Здесь я могу вспомнить, кто я такой и для чего живу. Наверное, это то место, за которое я люблю Норильск. И то место, где я чувствую себя по-настоящему живым.'
            ],
            monoImg: { src: dolgoeMono, orient: 'monoImgHor' }
        },
        {
            title: 'Апокалипсис. Но — любимый!',
            author: 'Валерия Магомедова',
            text: [
                'Я люблю весь Норильск. Как бы нескладно это ни звучало, он меня греет, напоминая теплый вязаный зимний свитер.',
                'Мне нравятся тихие закоулки, где время будто остановилось. Нравится смотреть на девятиэтажные муравейники, в которых переплетаются сотни судеб. Люблю и суету на Ленинском проспекте, его постоянное движение. Здесь чувствуется жизнь. Это вообще самая оптимистичная магистраль в городе — спасибо ярким фасадам и иллюминации.',
                'Но есть особенное место. Непримечательное, а для многих даже отталкивающее.',
                'Спустившись вниз по набережной Урванцева, видишь апокалиптический пейзаж — мое любимое озеро Долгое, живописно обрамленное ржавыми трубопроводами и бетонно-арматурными конструкциями.',
                'Долгое пробуждает ребячество: ты карабкаешься через раскаленные трубы, вокруг протекающих набираются и застывают лужи, по которым можно бегать, можно просто обойти озеро вокруг вместе со случайно прибившейся собачонкой. Можно где-то уединиться, сидеть у берега, кидая в воду камни, или смотреть на затянутый газом горизонт, сквозь который пробиваются — такие радостные — лучи солнца. Или же наоборот, смотреть на звезды, пусть их и всего пять. Зато Полярная заменяет все остальные!'
            ],
            rgbImg: { src: dolgoe1, orient: 'imgHor', order: 3 }
        }
    ],
    mainImg: dolgoe0,
    bgrImg: dolgoeBgr
};

export default dolgoe;
