import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img className='logo' src={require('../public/FoodAppIcon.png')} alt='logo' />
            </div> 
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li><Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                    <li><Link to={'/about'} style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
                    <li><Link to={`/grocery`} style={{ textDecoration: 'none', color: 'inherit' }}>Grocery</Link></li>
                    <li><Link to={`/contact`} style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link></li>
                    <li>🛒</li>
                    <button className='login-btn' 
                    onClick={
                     () => { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login') }
                    }>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;