import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import './AttractionEventPage.scss'
import { motion } from 'framer-motion'

function EventPage({ events }) {

    return (
        <section className='attractions'>
            <Topbar />
            <h2 className='attractions--heading'>Explore some of our our events.</h2>
            <motion.section className="attractions--content">
                {events.map((data, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: '-100vw', scale: 2.5 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.8, delay: i * 0.1 }}
                        className='attractions--card'
                        whileHover={{ scale: 1.1 }}
                    >
                        <img className="attractions--img" src={data.img} alt="attractions" />
                        <h4 className='attractions--paragraph'>{data.name}</h4>
                    </motion.div>
                ))}
            </motion.section>
            <Footer />
        </section>
    )
}

export default EventPage;