import './Points.scss';
import logo from '../../icons/logoBY.png';
import { Link } from 'react-router-dom';

function Points() {
    return (
        <div className='points'>
            <div className='contact__top'>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
                <h1 className='contact__top-title'>OUR REWARD PROGRAM</h1>
                <img className='contact__top-logo' src={logo} alt="cafe beignet's logo"></img>
            </div>
            <div className='points__main'>
                <h1>Cage Beignet points</h1>
                <div className='points__main-rules'>
                    <h2 className='points__main-rules__title'>EVERY</h2>
                    <h4 className='points__main-rules__content'>$1 = 1 POINT | 50 POINTS = $5 OFF</h4>
                </div>
                <Link to='/login'><button className='points__main-button'>SIGN UP OR LOG IN</button></Link>
            </div>
        </div>
    )
}

export default Points;