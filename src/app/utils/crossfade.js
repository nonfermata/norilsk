import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const crossfade = (link) => {
    navigate(link);
};

export default crossfade;
