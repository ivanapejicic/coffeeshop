import './Footer.scss';

function Footer(){
    return(
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__container-logo'>☕️</div>
                <div className='footer__container-text'>MENU</div>
            </div>
            <div className='footer__container'>
                <div className='footer__container-logo'>📞</div>
                <div className='footer__container-text'>CALL US</div>
            </div>
            <div className='footer__container'>
                <div className='footer__container-logo'>📍</div>
                <div className='footer__container-text'>LOCATION</div>
            </div>
        </div>
    )
}

export default Footer;