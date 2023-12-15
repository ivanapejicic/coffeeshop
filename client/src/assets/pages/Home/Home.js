import './Home.scss';
import home_image from '../../icons/IMG_3082.jpeg';

function Home() {

    return (
        <div className='home'>
        <h1 className='home__title'>
            Cafe Beignet
        </h1>
        <h2 className='home__subtitle'>
            Miami
        </h2>
        <img className = 'home__image' src={home_image} alt = "street view from in front of cafe in South Beach"></img>
        </div>

    )
}

export default Home;