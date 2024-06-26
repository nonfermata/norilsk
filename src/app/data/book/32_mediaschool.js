import mediaschoolBgr from '../../assets/images/articles/bgr/32_mediaschool_bgr.png';
import mediaschool0 from '../../assets/images/articles/32_mediaschool_0.png';
import mediaschool1 from '../../assets/images/articles/32_mediaschool_1.png';
import mediaschoolMono from '../../assets/images/articles/32_mediaschool_mono.png';
import mediaschoolIcon from '../../assets/images/icons/mediaschool_icon.png';

const mediaschool = {
    id: '32',
    name: 'mediaschool',
    cat: 'locations',
    icon: mediaschoolIcon,
    geo: { top: 57, left: 9 },
    mainTitle: 'Медиашкола в\u00A0«Северном\u00A0городе»',
    chapters: [
        {
            title: 'Найти друзей, цели, смыслы…',
            author: 'Игорь Колмаков',
            text: [
                'Самолет. Голос стюардессы. Небо. Яркие солнечные лучи проникают сквозь иллюминатор и бьют в глаза. Я до сих пор не могу поверить, что это происходит на самом деле. Вчера я прощался с друзьями и родственниками, а сегодня лечу рейсом Новосибирск — Норильск. Впервые в своей жизни. Я знал, что настанет момент, когда придется покинуть дом, свой город, свою родину, но это произошло как-то внезапно.',
                '— Все в порядке, дорогой? — спросила мама.',
                '— Да, мам, все нормально…',
                'Я достал наушники из кармана и принялся их распутывать.',
                'Мама… Она переживала больше всех. Работа, дом, переезд — все свалилось на нее. Я, как мог, старался ее поддерживать…',
                '— Просыпайся, мы прилетели!',
                'Аэропорт показался неплохим, даже милым. Тут нас встретил папа, прилетевший на месяц раньше. Все были рады и долго обнимались, затем забрали вещи и поехали в город. «Господи, здесь была атомная война?» — думал я, рассматривая землю, лишенную растительности. Автобус меж тем въехал в Норильск. Картина открылась необычная, немного пугающая. Серые закопченные дома на странных столбах, улицы практически пусты. Город казался мертвым. Это очень взволновало меня, но вида я не подал.',
                'Через пару дней мы с мамой решили пройтись по Норильску, к тому же нужно было отдать документы в новую школу. Теперь он выглядел иначе: на улицах царило оживление, ездили машины, слышался детский смех. Школа тоже поразила: раньше я учился в небольшом двухэтажном здании, а это было просто громадным! Ну а потом произошла поистине фантастическая встреча с новыми одноклассниками. Когда учительница представила меня, они начали громко аплодировать, радостно восклицая: «Круто, что ты пришел к нам!» Все стало налаживаться, тем более что родители получили хорошую работу. В течение месяца меня постоянно окружала толпа, ребята задавали много вопросов. Однако потом все утихло: интерес ко мне исчез, и я снова загрустил, оставшись в одиночестве. И тут… обнаружил на стенде плакат с надписью «Meдиашкола в Заполярье». Я внимательно все прочитал и сразу же решил туда пойти. Друзей у меня еще не было, а завести их очень хотелось. К тому же я был рад заняться чем-то, кроме школы обычной, которая уже превратилась в рутину. И вскоре я поехал на первую встречу в медиакомпанию «Северный город».',
                'Это было невероятно! Занятие произвело прекрасное впечатление: познавательно, весело, совершенно необычно! Потрясающая творческая атмосфера! Я познакомился с ребятами, показавшимися мне очень добрыми и талантливыми. Наконец пришло чувство спокойствия. Чувство, что все теперь в порядке. Я твердо решил, что буду здесь учиться и справлюсь со всеми невзгодами на пути. Все люди тут — свои.',
                'Все будет хорошо!'
            ],
            monoImg: { src: mediaschoolMono, orient: 'monoImgNormal' },
            rgbImg: { src: mediaschool1, orient: 'imgHor', order: 3 }
        }
    ],
    ps: 'P. S. Курс я окончил, получил диплом, учусь в европейском вузе. Переписываюсь с найденными здесь друзьями. Медиашкола останется в сердце навсегда…',
    mainImg: mediaschool0,
    bgrImg: mediaschoolBgr
};

export default mediaschool;
