import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/charcuterie.jpg';

export default makeStyles(() => ({
    paper: {
        textAlign: 'center',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        color: '#444444',
    },
    title: {
        marginTop: '5%',
        paddingTop: '4rem',
        fontWeight: '800',
    },
    body: {
        padding: '1rem 6rem 3rem',
        fontWeight: '700',
    },
}));