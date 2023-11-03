import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import './FerrisWheelPage.scss'
import { motion } from 'framer-motion';


function FerrisWheelPage() {
    return (
        <section className="ferrisWheel">
            <Topbar />
            <motion.section
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
                className='ferrisWheel--card'>
                <img className="ferrisWheel--img" src="../src/images/attractions/ferris-wheel-s.jpg" alt="Ferris Wheel" />
                <section className='ferrisWheel--text'>
                    <h2 className='ferrisWheel--heading'>Ferris wheel</h2>
                    <p>At Extravaganza Theme Park, our Ferris Wheel stands as a symbol of awe-inspiring heights and timeless amusement. As you step into one of the comfortable, spacious cabins, prepare yourself for a gentle ascent that unveils breathtaking views of the park and its surroundings. With each rotation, you'll be treated to panoramic vistas, capturing the essence of the park's magic from a bird's-eye perspective. Whether you're seeking a romantic moment under the stars, a family-friendly adventure, or simply a serene escape above the bustling excitement of the park, the Extravaganza Ferris Wheel promises an unforgettable experience for visitors of all ages. Come, take a ride, and let your spirits soar as you reach for the skies on this iconic attraction!</p>
                </section>
            </motion.section>
            <Footer />
        </section>
    );
}

export default FerrisWheelPage;