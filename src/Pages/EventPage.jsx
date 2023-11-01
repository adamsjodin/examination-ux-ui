import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import './AttractionEventPage.scss'
import  {  motion } from 'framer-motion'

function EventPage({ events }) {

    return (
        <section className='attractions'>
            <Topbar />
            <h2 className='attractions--heading'>Here are a few of our events</h2>
            <section className="attractions--content">
                {events.map((data, i) => (
                        <motion.div 
                            className='attractions--card' 
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            >
                                <img className="attractions--img" src={data.img} alt="attractions" />
                                <h4 className='attractions--paragraph'>{data.name}</h4>
                        </motion.div>

                ))}
            </section>
            <Footer />
        </section>
    )
}

export default EventPage;