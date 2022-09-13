import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'
import "./Auth.css"

const initialState = {user: '', password: '', confirmpassword: '' }

const Auth = () => {
    const dispatch = useDispatch()
    const [isSignup, setIsSignup] = useState(false)
    const history = useNavigate()
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    
  return (
    <div className='app__auth app__flex'>
        <div className='signin app__flex'>
            <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
            <form className='signin-form app__flex' onSubmit={handleSubmit}>
                <input name='user' className='username' placeholder='UserName' onChange={handleChange} required />
                <input name ='password' className='password' placeholder='Password' type={'password'} onChange={handleChange} required />
                { isSignup && <input name='confirmpassword' className='confirmpassword' placeholder='Confirm Password' type={'password'} onChange={handleChange} />}  
                <button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
                <button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</button> 
            </form>
        </div>
    </div>
  )
}

export default Auth