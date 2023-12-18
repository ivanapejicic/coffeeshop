import './Menu.scss';

function Menu() {
    return (
        <div className='menu-page'>
            <h1 className='title'>MENU</h1>
            <div className='menu'>
                <h2 className='menu__title'>BEIGNET (BEN-YAY)</h2>
                <p>NEW ORLEANS FRIED PASTRY 'CAJUN DOUGHNUT' SET OF 3 SQUARES</p>
                <div className='menu__item'>
                    <h3 className='menu__item-title'>ORIGINAL</h3>
                    <p className='menu__item-description'>a world-renowned deep fried New Orleans classic beignet covered with powered sugar</p>
                    <h3 className='menu__item-title'>$7</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title'>CHOCOLATE</h3>
                    <p className='menu__item-description'>a light and airy nutella whip to dip the classic beignet</p>
                    <h3 className='menu__item-title'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title'>PASTRY CREAM</h3>
                    <p className='menu__item-description'>classic beignet filled with a rich pastry cream and covered in powered sugar</p>
                    <h3 className='menu__item-title'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title'>SCALLION & BACON</h3>
                    <p className='menu__item-description'>classic beignet filled with a rich creamy and infused with smoky bacon and scallion</p>
                    <h3 className='menu__item-title'>$9</h3>
                </div>
                <div className='menu__item'>
                    <h3 className='menu__item-title'>ARTICHOKE & ASIAGO</h3>
                    <p className='menu__item-description'>crafted with tender artichokes, complemented with buttery asiago filled in classic beignet</p>
                    <h3 className='menu__item-title'>$9</h3>
                </div>
            </div>
        </div>
    )
}

export default Menu