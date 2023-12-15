import './Home.scss';
import Header from '../../components/Header/Header';
import home_image from '../../icons/IMG_3082.jpeg';

function Home() {

    return (
        
        <div className='home'>
            <Header />
        <img className = 'home__image' src={home_image} alt = "street view from in front of cafe in South Beach"></img>
        </div>

    )
}

export default Home;