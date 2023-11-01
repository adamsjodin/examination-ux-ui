import Nav from './Nav';
import './Topbar.scss'
import { useNavigate } from 'react-router-dom';


function Topbar() {
    const navigate = useNavigate()
    
    return (
            <section className="topbar">
                <div className='topbar--nav'>
                    <Nav />
                    <h4 className='topbar--heading' onClick={() => navigate('/main')}>EXTRAVAGANZA</h4>
                    <div></div>
                </div>
            </section>
    );
}

export default Topbar;