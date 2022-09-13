import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createApp, updateApp } from '../../actions/apps'
import { useSelector } from 'react-redux'
import './Form.css'

const Form = ({ currentId, setCurrentId}) => {

  const app = useSelector((state) => currentId ? state.apps.find((p) => p._id === currentId) : null)

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(app) setAppData(app)
  }, [app])

  const [appData, setAppData] = useState({
    company: "",
    role: "",
    status: "",
    dateApplied: "",
    apptrackerURL: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(currentId) {
      dispatch(updateApp(currentId, {...appData, name: user?.result?.user}))
    } else{
      dispatch(createApp({ ...appData, name: user?.result?.user}))
    }

    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setAppData({
      company: "",
      role: "",
      status: "",
      dateApplied: "",
      apptrackerURL: "",
    })
  }

  if(!user?.result?.user) {
    return (
      <div className='cannotCreate'>
        <p>Please Sign in or Sign up to track Applications </ p>

        <p> To use a demo user, enter the following credentials:</p>
        <p> UserName - DemoUser | Password - DemoUser</p>
      </div>
    )
  }
  return (
    <div className='app__form-container app__flex'>
      <form autoComplete='off' noValidate className='app__form app__flex' onSubmit={handleSubmit}>
        <div className='app__form-title'>{currentId ? 'Edit an Application' : 'Add an Application'}</div>
        <input name="company" placeholder='Company' value={appData.company} onChange={(e) => setAppData({ ...appData, company: e.target.value})}/>
        <input name="role" placeholder='Role' value={appData.role} onChange={(e) => setAppData({ ...appData, role: e.target.value})}/>
        <input name="status" placeholder='Status' value={appData.status} onChange={(e) => setAppData({ ...appData, status: e.target.value})}/>
        <input name="dateApplied" placeholder='Date Applied' value={appData.dateApplied} onChange={(e) => setAppData({ ...appData, dateApplied: e.target.value})}/>
        <input name="apptrackerURL" placeholder='Application Tracker URL' value={appData.apptrackerURL} onChange={(e) => setAppData({ ...appData, apptrackerURL: e.target.value})}/>
        <button className='app__form-submitbutton' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form