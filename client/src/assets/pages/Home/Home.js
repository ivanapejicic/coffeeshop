import './Home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import home_image from '../../icons/IMG_3082.jpeg';

function Home() {

    return (

        <div className='home'>
            <Header />
            <img className='home__image' src={home_image} alt="street view from in front of cafe in South Beach"></img>
            <h2 className='home__title'>Discover the Perfect Blend at Cafe Beignet</h2>
            <p className='home__paragraph'>Indulge your senses at Cafe Beignet, a charming haven nestled within the vibrant heart of South Beach. Immerse yourself in the delightful aroma of freshly brewed Italian coffee and the irresistible allure of our made-from-scratch beignets.</p>
            <h3 className='home__subtitle'>Savor the Flavor</h3>
            <p className='home__paragraph'>At Cafe Beignet, we craft a culinary experience that transcends the ordinary. Our commitment to excellence is reflected in every cup of our exceptional Italian coffee, expertly brewed to perfection. Each sip is a journey through rich and robust flavors that awaken your taste buds.</p>
            <h3 className='home__subtitle'>Mouthwatering Beignets</h3>
            <p className='home__paragraph'>Our beignets are a celebration of indulgence. Light, fluffy, and dusted with a touch of sweetness, these freshly made pastries are a true delight. Whether you prefer them as a sweet start to your day or a tempting treat any time, our beignets promise a moment of pure bliss with every bite.</p>
            <Footer />
        </div>

    )
}

export default Home;