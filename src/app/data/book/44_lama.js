import lamaBgr from '../../assets/images/articles/bgr/44_lama_bgr.png';
import lama0 from '../../assets/images/articles/44_lama_0.png';
import lama1 from '../../assets/images/articles/44_lama_1.png';
import lama2 from '../../assets/images/articles/44_lama_2.png';
import lamaMono from '../../assets/images/articles/44_lama_mono.png';

const lama = {
    id: '44',
    name: 'lama',
    cat: 'locations',
    type: 'A',
    mainTitle: 'Озеро Лама',
    chapters: [
        {
            title: 'Никого — кроме меня и природы',
            author: 'Изабелла Чупрова',
            text: ['']
        }
    ],
    mainImg: lama0,
    bgrImg: lamaBgr,
    monoImg: lamaMono,
    images: [lama1, lama2]
};

export default lama;
