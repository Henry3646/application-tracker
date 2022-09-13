import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './Navbar.css'


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation();
    console.log(user)

     useEffect(() => {
         setUser(JSON.parse(localStorage.getItem('profile')))
     }, [location])

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })

        history('/')
        window.location.reload()
        setUser(null)
    }

  return (
    <div className='app__navbar app__flex'>
        <p>Application Tracker</p>
        <div className='app__navbar-user app__flex'>
            {user ? (
                <div className='user-profile app__flex'>
                    <div className='user-name'> Welcome {user.result.user}</div>
                    <button className='logout' onClick={logout}>Logout</button>
                </div>
            ) : (
                <Link to="/auth" className='signinlink'>Sign In</Link>
            )}
        </div>
    </div>
  )
}

export default Navbar