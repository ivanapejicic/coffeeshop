import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className='footer'>
            <Link className='footer__container' to='/menu'>
                <div className='footer__container-logo'>☕️</div>
                <div className='footer__container-text'>MENU</div>
            </Link>
            <Link className='footer__container' to='/contact'>
                <div className='footer__container-logo'>📞</div>
                <div className='footer__container-text'>CALL US</div>
            </Link>
            <Link className='footer__container' to = "/address">
                <div className='footer__container-logo'>📍</div>
                <div className='footer__container-text'>LOCATION</div>
            </Link>
        </div>
    )
}

export default Footer;