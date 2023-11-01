import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import './AttractionEventPage.scss'
import  {  motion } from 'framer-motion'

function AttractionPage({ attractions }) {


    return (
        <section className='attractions'>
            <Topbar />
            <h2 className='attractions--heading'>Here are some of our rides and attractions</h2>
            <section className="attractions--content">
                {attractions.map((data, i) => (
                    <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className='attractions--card' 
                    key={i}>
                        <img className="attractions--img" src={data.img} alt="attractions" />
                        <h4 className='attractions--paragraph'>{data.name}</h4>
                    </motion.div>
                ))}
            </section>
            <Footer />
        </section>
    );
}

export default AttractionPage;