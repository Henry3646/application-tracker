import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteApp } from '../../../actions/apps'
import './Application.css'


const Application = ({ app, setCurrentId }) => {

  const dispatch = useDispatch()


  return (
    <div className='app__app-container app__flex'>
      <div className='company-info app__flex'>
        <div className='company'>{app.company}</div>
        <div className='role'>{app.role}</div>
      </div>
      <div className='status app__flex'>Status: {app.status}</div>
      <div className='dateapplied app__flex'>Applied on {app.dateApplied}</div>
      <div className='URL app__flex'><a href={app.apptrackerURL} target={'_blank'} rel="noreferrer" className='link'>Status Page</a></div>
      <div className='buttons app__flex'>
        <button className='edit' onClick={() => setCurrentId(app._id)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className='delete' onClick={() => dispatch(deleteApp(app._id))}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default Application