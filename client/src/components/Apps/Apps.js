import React from 'react'
import Application from './App/Application.js'
import { useSelector } from 'react-redux'
import './Apps.css'

const Apps = ({ setCurrentId }) => {

  const apps = useSelector((state) => state.apps)

  return (
    <div className='app__apps-container app__flex'>
        {apps.map((app) => (
            <Application app={app} setCurrentId={setCurrentId}
            key={app._id}/>
        ))}
    </div>
  )
}

export default Apps