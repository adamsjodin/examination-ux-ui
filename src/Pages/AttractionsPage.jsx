import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import './AttractionEventPage.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function AttractionPage({ attractions }) {

    const navigate = useNavigate()

    return (
        <section className='attractions'>
            <Topbar />
            <h2 className='attractions--heading'>Explore some of our rides and attractions.</h2>
            <motion.section className="attractions--content">
                {attractions.map((data, i) => (
                    <motion.div
                        initial={{ y: '100vw', scale: 2.5 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.8, delay: i * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.8 }}
                        className='attractions--card'
                        key={i}>
                        <img onClick={() => navigate(`/attractions/${attractions[0].id}`)} className="attractions--img" src={data.img} alt="attractions" />
                        <h4 className='attractions--paragraph'>{data.name}</h4>
                    </motion.div>
                ))}
            </motion.section>
            <Footer />
        </section>
    );
}

export default AttractionPage;