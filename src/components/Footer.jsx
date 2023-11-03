import './Footer.scss'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate()

    return (
        <footer className='footer'>
            <ul className='footer--list'>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ color: 'rgba(124, 108, 117, 0.96)', scale: 1.3, originX: 0 }} onClick={() => navigate('/')} >Home</motion.li>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ color: 'rgba(124, 108, 117, 0.96)', scale: 1.3, originX: 0 }} onClick={() => navigate('/events')} >Events</motion.li>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ color: 'rgba(124, 108, 117, 0.96)', scale: 1.3, originX: 0 }} onClick={() => navigate('/attractions')} >Attractions</motion.li>
                <li>Subscribtion</li>
            </ul>
            <figure className='footer--iconsContainer'>
                <motion.img
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 0.8,
                        ase: 'easeInOut'
                    }}
                    className='footer--icons'
                    src="/src/icons/facebook.svg"
                    alt="facebook" />
                <motion.img
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut'
                    }}
                    className='footer--icons'
                    src="/src/icons/instagram.svg"
                    alt="instagram" />
                <motion.img
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, 45, 0, 45, 0, 45, 0, 45, 0],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                    exit={{}}
                    className='footer--icons'
                    src="/src/icons/twitter.svg"
                    alt="twitter" />
                <motion.img
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut'
                    }}
                    className='footer--icons'
                    src="/src/icons/linkedin.svg"
                    alt="linkedin" />
            </figure>
            <ul className='footer--list left'>
                <li>About</li>
                <li>Contact</li>
                <li>Career</li>
                <li>Find us</li>
            </ul>
        </footer>
    );
}

export default Footer
