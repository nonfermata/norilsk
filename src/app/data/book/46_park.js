import parkBgr from '../../assets/images/articles/bgr/46_park_bgr.png';
import park0 from '../../assets/images/articles/46_park_0.png';
import park1 from '../../assets/images/articles/46_park_1.png';
import parkMono from '../../assets/images/articles/46_park_mono.png';
import parkIcon from '../../assets/images/icons/park_icon.png';

const park = {
    id: '46',
    name: 'park',
    cat: 'locations',
    icon: parkIcon,
    geo: { top: 57, left: 20 },
    mainTitle: 'Парк у «Черного тюльпана» и трубы',
    subTitle: 'Здесь видишь не внешность Норильска',
    chapters: [
        {
            title: 'Тут мы гуляли с папой',
            author: 'Алена Зебарева',
            text: [
                'Мне кажется, любимым местом в городе может быть что угодно — даже лавочка возле фонарного столба. Любое место становится особенным, если с ним связано приятное воспоминание, какая-нибудь история…',
                'Для меня это парк «Черный тюльпан», который находится рядом с моим домом. В нем есть монумент в виде черного тюльпана в память о погибших на вой­не, огромные солнечные часы и кирпичная крепость. За парком озеро, рядом многочисленные трубы. Когда мне было 11 лет, мы с папой впервые отправились сюда гулять. Сначала бродили по парку, потом пошли к озеру. Конец осени, только что выпал первый снег… Мы фотографировались, играли в снежки и даже слепили маленького снеговика. Мне было весело и легко. С папой я виделась только по выходным и такие встречи очень ценила.',
                'Чтобы добраться до озера, нужно сначала пройти по теплотрассе, но я совсем не боялась, потому что папа был рядом и помогал перебираться с одной трубы на другую. Обычно такое времяпрепровождение больше нравится мальчикам, но я была безумно довольна. Правда, до берега мы так и не добрались, потому что слишком увлеклись хождением по трубам…',
                'Прошло уже много лет, но я до сих пор помню, как мы с папой тогда гуляли. Это и по сей день мое любимое место. До отъезда на учебу в Москву я приходила туда летом с подругами, а когда грустила — одна. Здесь мне всегда становилось легче.'
            ],
            monoImg: { src: parkMono, orient: 'monoImgHor' }
        },
        {
            title: 'Трогая душу города',
            author: 'Валентина Щербакова',
            text: [
                'У Норильска своя красота, особенная. Скульптуры, парки, красивые отремонтированные здания… Это все, конечно, хорошо. Но дорого мне другое.',
                'На улице Набережной, сразу за младшим корпусом моей школы, находятся красные башни (никто не знает, как они называются на самом деле). Помню: мне пять лет, на мне легкое сиреневое пальто и забавная шапочка. Дедушка ведет меня за руку прямо к башням. Там я забираюсь на солнечные часы и бегаю кругами, держась за торчащую вверх железную стрелку, пока наш пес Валёк носится и прыгает поблизости.',
                'Сейчас башенки разрушились, краска потускнела, слезла, а Валёк и мой дедушка — самый лучший дедушка на свете — стали моими воспоминаниями.',
                'Стоит спуститься по склону из очень острых камней и самого различного разноцветного мусора, и окажешься возле труб. Они такие… огромные! Широкие, когда-то обшитые стекловатой, а теперь она лишь обгорелыми кусками валяется под ними. На трубах рыжая яркая ржавчина — говорят, такими же рыжими могут быть листья осенью на материке. Иногда из труб ключом бьет горячая вода, и тогда там поднимается такой пар, что дальше вытянутой руки ничего не увидишь.',
                'Местное развлечение — чрезвычайно популярное среди подростков — прогулка по трубам.',
                'Становитесь в колонну и друг за другом идете вперед к мечети, попутно любуясь отблесками вечернего солнца в озере Долгом. Если через трубы перелезть, то можно оказаться у самой воды, спустившись по мостику из деревянной доски на бетонных блоках.',
                'Здесь можно все, кроме одного — приходить в одиночку. Тогда действительно рискуешь. Однажды я зацепилась за проволоку на трубе и начала падать. Если бы меня не поймала подруга…',
                'Мусор тут, конечно, везде. Его много, и никто не думает убирать. Но ты не чувствуешь отвращения, скорее, интерес. Кто оставил здесь эти две старые шины? А там, где лежит бревно, стоит маленький забытый мангал, а вот на том камне сидит серебристая чайка.',
                'Тут видишь не внешность Норильска. Здесь ты трогаешь его душу. Ты идешь по деревянным балкам, когда-то означавшим путь электрички, травишь байки о скелетах, живущих в озере, и потом возвращаешься домой обессиленный, но крайне довольный и счастливый. Потом лежишь в теплой кровати, читаешь книгу, пьешь чай. И понимаешь, насколько сильно ты любишь эту уродливую красоту.'
            ],
            rgbImg: { src: park1, orient: 'imgHor', order: 5 }
        }
    ],
    mainImg: park0,
    bgrImg: parkBgr
};

export default park;
