import './Contact.scss';
import logo from '../../icons/logoBY.png';
import beignet from '../../icons/beignetNutella.png';

function Contact() {
    const handleSubmit = () => {
        alert('Form submitted!');
    };
    return (
        <div className='contact'>
            <div className='contact__top'>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
                <h1 className='contact__top-title'>CONTACT US</h1>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
            </div>
            <img className='contact__img' src={beignet} alt="Beignet with powdered sugar on top"></img>
            <h1 className='contact__title'>CONTACT</h1>
            <form className='contact__form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name *</label>
                <input className='contact__form-field' type='text' id='name' name='name' required />

                <label htmlFor='email'>Email *</label>
                <input className='contact__form-field' type='email' id='email' name='email' required />

                <label htmlFor='subject'>Subject</label>
                <input className='contact__form-field' type='text' id='subject' name='subject' />

                <label htmlFor='message'>Message</label>
                <textarea className='contact__form-area' id='message' name='message'></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default Contact;