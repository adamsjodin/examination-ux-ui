import './MainPage.scss'
import Footer from '../components/Footer';
import Navbar from '../components/Topbar'
import { useNavigate } from 'react-router-dom';
import {  motion } from 'framer-motion'


function MainPage() {

    const navigate = useNavigate()

    return ( 
        <main className='mainPage--flex'>
        <Navbar />
        <motion.section
            // className='mainPage--text'
            // initial={{ x: '-100vw'}}
            // animate={{ x: 0 }}
        >
        <h2 className='mainPage--h2'>Discover our park</h2>
        <p className='mainPage--paragraph'>Explore the attractions and events</p>
        </motion.section>
        <motion.section 
            className='mainPage'
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{type: 'spring', stiffness: 200, duration: 1 }}

            >    
            <motion.section 
                onClick={() => navigate("/events")} 
                className='mainPage--container'
                whileHover={{ scale: 1.03 }}
                >
                <img className='mainPage--images' src="/src/images/main-event2-s.jpg" alt="Live music"/>
                <h3 className='mainPage--heading'>Concerts and Events</h3>
            </motion.section>
            <motion.section 
                onClick={() => navigate("/attractions")} 
                className='mainPage--container'
                whileHover={{ scale: 1.03 }}

                >
                <img className='mainPage--images' src="/src/images/main-attraction-s.jpg" alt="Roller coaster"/>
                <h3 className='mainPage--heading'>Rides and Attractions</h3>
            </motion.section>
        </motion.section>
        <Footer />
        </main>
     );
}

export default MainPage;