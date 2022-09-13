import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Apps from '../Apps/Apps.js'
import Form from '../Form/Form.js'
import { getApps } from '../../actions/apps'
import './Home.css'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApps())
  }, [currentId, dispatch])

  return (
    <div className='app__home app__flex'>
        <Apps setCurrentId={setCurrentId}/>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Home