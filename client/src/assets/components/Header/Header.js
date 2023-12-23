import './Header.scss';
import logo from '../../icons/logoBY.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="cafe beignet's logo, yellow coffee cup with cafe name under"></img> 
            <div className='header__nav'>
                <Link className='header__nav-a' to = '/about'>ABOUT</Link>
                <Link className='header__nav-a' to = '/menu'>MENU</Link>
                <Link className='header__nav-a' to ='/points'>POINTS</Link>
                <Link className='header__nav-a' to='/contact'>CONTACT</Link>
                <Link className='header__nav-a2' to='/order'>ORDER NOW</Link>

            </div>
        </div>
    )
}

export default Header