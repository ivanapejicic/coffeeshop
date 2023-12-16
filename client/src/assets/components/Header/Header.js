import './Header.scss';
import logo from '../../icons/logoBY.png';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt="cafe beignet's logo, yellow coffee cup with cafe name under"></img> 
        </div>
    )
}

export default Header