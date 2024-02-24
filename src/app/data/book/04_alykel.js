import alykelBgr from '../../assets/images/articles/bgr/04_alykel_bgr.png';
import alykel0 from '../../assets/images/articles/04_alykel_0.png';
import alykel1 from '../../assets/images/articles/04_alykel_1.png';
import alykelMono from '../../assets/images/articles/04_alykel_mono.png';

const alykel = {
    id: '04',
    name: 'alykel',
    cat: 'locations',
    type: 'A',
    mainTitle: 'Алыкель',
    vrezka: 'С чего начинается Норильск? Конечно же, с аэропорта Алыкель, который теперь еще  и носит имя знаменитого геолога и полярного исследователя Николая Урванцева!',
    chapters: [
        {
            title: 'Тут можно переждать любой шторм...',
            author: 'Константин Пьянкин',
            text: [
                'В наш город с Большой земли можно попасть двумя путями: самолетом и теплоходом через Дудинку. Второе реально только летом, да и не многие захотят тратить пять дней, чтобы доплыть только лишь до Красноярска. Самолет — самый удобный вид транспорта.',
                'Алыкель для норильчан — больше, чем аэропорт. Это место сна, отдыха, ожидания, сильных эмоций при встречах-прощаниях и переживаний из-за отложенного рейса. За это я его и люблю. Ни в каком другом городе у меня не возникало таких же приятных и одновременно неприятных чувств. Ох, как же бывает сложно до него доехать и как трудно уехать. Сколько себя помню, почти каждое начало и конец отпуска — отдельное небольшое приключение. Думаю, что у каждого жителя Норильска найдется хотя бы одна история, связанная с аэропортом. Есть она и у меня.',
                'Как-то в ноябре я возвращался с материка. Дата прилета совпала с очередным штормом в городе. Каким-то чудесным образом пилот смог посадить самолет со второй попытки. Мы зашли в здание аэропорта, а что дальше? Дороги перекрыты из-за непогоды, колонны автобусов нет. Весь наш рейс остался изолированным в казавшемся брошенным здании. Ранее у меня бывали случаи, когда приходилось сидеть в аэропорту подолгу, но в этот раз ждать пришлось 10 часов! За это время успеваешь привыкнуть к месту и узнаешь некоторые лайфхаки: где удобнее лечь спать, в каком автомате кофе вкуснее и т. д. Успеваешь привыкнуть к персоналу, а некоторых сотрудников уже знаешь по имени. Выйти на улицу страшно, видимость — два метра, ветер дует с такой силой, что курящие граждане придерживаются за поручни, чтобы не упасть. Жутко, но как-то романтично. И разве такое может быть в другом городе?!'
            ],
            monoImg: { src: alykelMono, orient: 'monoImgNormal' },
            rgbImg: { src: alykel1, orient: 'imgVert', order: 1 }
        }
    ],
    mainImg: alykel0,
    bgrImg: alykelBgr
};

export default alykel;
