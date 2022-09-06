import React, { useEffect, useState } from 'react'
import './components/Styles/App.css'
import Apps from './components/Apps/Apps.js'
import Form from './components/Form/Form.js'
import { useDispatch } from 'react-redux'
import { getApps } from './actions/apps'

const App = () => {

  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApps())
  }, [currentId, dispatch])

  return (
    <div className='app__app app__flex'>
      <Apps setCurrentId={setCurrentId}/>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default App