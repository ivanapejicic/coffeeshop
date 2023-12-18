import './Menu.scss';
import logo from '../../icons/logoBY.png';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu-page'>
            <div className='menu-page__top'>
                <img className='menu-page__top-logo' src={logo} alt="cafe beignet's logo"></img>
                <h1 className='menu-page__top-title'>MENU</h1>
                <img className='menu-page__top-logo' src={logo} alt="cafe beignet's logo"></img>
            </div>
            <div className='menu'>
                <h2 className='menu__title'>BEIGNET (BEN-YAY)</h2>
                <p className='menu__description'>NEW ORLEANS FRIED PASTRY 'CAJUN DOUGHNUT' SET OF 3 SQUARES</p>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>ORIGINAL</h3>
                    <p className='menu__item-description'>a world-renowned deep fried New Orleans classic beignet covered with powered sugar</p>
                    <h3 className='menu__item-title2'>$7</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>CHOCOLATE</h3>
                    <p className='menu__item-description'>a light and airy nutella whip to dip the classic beignet</p>
                    <h3 className='menu__item-title2'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>PASTRY CREAM</h3>
                    <p className='menu__item-description'>classic beignet filled with a rich pastry cream and covered in powered sugar</p>
                    <h3 className='menu__item-title2'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>SCALLION & BACON</h3>
                    <p className='menu__item-description'>classic beignet filled with a rich creamy and infused with smoky bacon and scallion</p>
                    <h3 className='menu__item-title2'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>ARTICHOKE & ASIAGO</h3>
                    <p className='menu__item-description'>crafted with tender artichokes, complemented with buttery asiago filled in classic beignet</p>
                    <h3 className='menu__item-title2'>$9</h3>
                </div>
            </div>
            <div className='menu'>
                <h2 className='menu__title'>COFFEE ☕️</h2>
                <p className='menu__description'>ICED OR HOT</p>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>ESPRESSO</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$3.20</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>DBL ESPRESSO</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$3.60</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>MACCHIATO</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$3.60</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>CAPPUCCINO</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$4.80</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>LATTE</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$5.20</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title1'>AMERICANO</h3>
                    <p className='menu__item-description'></p>
                    <h3 className='menu__item-title2'>$4.30</h3>
                </div>
            </div>
        </div>
    )
}

export default Menu