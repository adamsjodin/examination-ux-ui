import './BurgerMenu.scss'
import { motion } from 'framer-motion'


function BurgerMenu({ openNav }) {
    return ( 
        <motion.div className="burger">
            <motion.div 
                animate={{ 
                    rotate: openNav ? -45 : 0, 
                    y: openNav ? 10 : 0}}
                className="burger--menu burger1"></motion.div>
            <motion.div 
                animate={{ opacity: openNav ? 0 : 1}}
                className="burger--menu burger2"></motion.div>
            <motion.div 
                animate={{ 
                    rotate: openNav ? 45 : 0, 
                    y: openNav ? -12 : 0}}
                className="burger--menu burger3"></motion.div>
        </motion.div>
     );
}

export default BurgerMenu;


