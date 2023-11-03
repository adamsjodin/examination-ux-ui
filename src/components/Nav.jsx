import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { motion } from 'framer-motion';
import './nav.scss'
import { useNavigate } from 'react-router-dom';



function Nav() {

    const [openNav, setOpenNav] = useState(false)


    const navigate = useNavigate()

    const handleAttractionClick = () => {
        navigate("/attractions")
    }
    const handleHomeClick = () => {
        navigate("/main")
    }
    const handleEventClick = () => {
        navigate("/events")
    }

    return (
        <>
            <div onClick={() => setOpenNav(!openNav)}>
                <BurgerMenu openNav={openNav} />
            </div>
            {
                openNav &&
                <motion.div
                    className="nav"
                    initial={{
                        opacity: 0,
                        y: '-50vh',
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        backgroundColor: 'rgba(124, 108, 117, 0.96)'
                    }}
                    transition={{ duration: 0.1 }}
                >
                    <motion.ul
                        className="nav--ul"
                        initial='hidden'
                        animate='visible'
                    >
                        <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.1 }} whileTap={{ scale: 0.5 }} whileHover={{ color: '#fff', scale: 1.2 }} onClick={handleHomeClick} >Home</motion.li>
                        <motion.li initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 0.2 }} whileTap={{ scale: 0.5 }} whileHover={{ color: '#fff', scale: 1.2 }} onClick={handleEventClick} >Events</motion.li>
                        <motion.li initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} whileTap={{ scale: 0.5 }} whileHover={{ color: '#fff', scale: 1.2 }} onClick={handleAttractionClick} >Attractions</motion.li>
                        <motion.li initial={{ y: -250 }} animate={{ y: 0 }} transition={{ duration: 0.4 }} >Prices/Tickets</motion.li>
                        <motion.li initial={{ y: -300 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} >Find us</motion.li>
                    </motion.ul>
                </motion.div>

            }
        </>
    );
}

export default Nav;