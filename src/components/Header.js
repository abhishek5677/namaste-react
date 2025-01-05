import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const { loggedInUser } = useContext(UserContext);

    const [loginUser, setLoginUSer] = useState('login')
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);

    return (
        <div className='flex items-center justify-between px-10 py-5 bg-orange-500'>
            <div className='logo-container'>
                <img className='w-28' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul className="flex justify-end	gap-4">
                    <li>
                        Online status: {onlineStatus ? 'online ✅' : 'offline ❌'}
                    </li>
                    <li>
                        <Link to={'/'} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'} >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Grocery'} >
                            Grocery
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() => loginUser === 'login' ? setLoginUSer('logout') : setLoginUSer('login')}
                    >
                        {loginUser}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
