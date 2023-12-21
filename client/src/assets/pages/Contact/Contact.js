import './Contact.scss';
import logo from '../../icons/logoBY.png';
import beignet from '../../icons/beignetNutella.png';

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__top'>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
                <h1 className='contact__top-title'>CONTACT US</h1>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
            </div>
            <img className='contact__img' src={beignet} alt="Beignet with powdered sugar on top"></img>
        </div>
    )
}


export default Contact;