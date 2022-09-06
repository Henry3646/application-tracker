import React from 'react'
import Application from './App/Application.js'
import { useSelector } from 'react-redux'
import './Apps.css'

const Apps = ({ setCurrentId }) => {

  const apps = useSelector((state) => state.apps)

  console.log(apps)
  return (
    <div className='app__apps-container app__flex'>
        {apps.map((app) => (
          <div key={app._id}>
            <Application app={app} setCurrentId={setCurrentId}/>
          </div>
        ))}
    </div>
  )
}

export default Apps