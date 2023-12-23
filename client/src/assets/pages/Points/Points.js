import './Points.scss';
import logo from '../../icons/logoBY.png';

function Points() {
    return (
        <div className='points'>
            <div className='contact__top'>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
                <h1 className='contact__top-title'>OUR REWARD PROGRAM</h1>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
            </div>
        </div>
    )
}

export default Points;