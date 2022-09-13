import express from 'express'
const router = express.Router()
import { getApps, createApp, updateApp, deleteApp } from '../controllers/Apps.js'

import auth from '../middleware/auth.js'

router.get('/', auth, getApps)
router.post('/', auth, createApp)
router.patch('/:id', auth, updateApp)
router.delete('/:id', auth, deleteApp)

export default router