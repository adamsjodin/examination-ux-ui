import { useNavigate } from "react-router-dom"
import './LandingPage.scss'
import  {  motion } from 'framer-motion'

function LandingPage() {
    
    const navigate = useNavigate();

    return (
        <motion.section 
            className="landingPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 4 }}
            transition={{duration: 0.4}}
            >
            <motion.h1 
                className="landingPage--heading"
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }}
            >EXTRAVAGANZA</motion.h1>
            <motion.h3 
                className="landingPage--paragraph"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }}

            >THEME PARK</motion.h3>
            <motion.button 
                className="landingPage--btn" 
                onClick={() => navigate('/main')}
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                exit={{ opacity: 0 }}

                whileHover={{ 
                    scale: 1.1, 
                    transition: 'duration 0.5', 
                    textShadow: '0px 0px 20px 0px rgba(0,0,0,0.68)',
                    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.68)'
                    
                }}
                whileTap={{ 
                    scale: 0.8, 
                    transition: 'duration 0.5' 
                }}
            >ENTER</motion.button>
        </motion.section>
    );
}

export default LandingPage;