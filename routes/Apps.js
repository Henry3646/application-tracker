import express from 'express'
const router = express.Router()
import { getApps, createApp, updateApp, deleteApp } from '../controllers/Apps.js'

router.get('/', getApps)
router.post('/', createApp)
router.patch('/:id', updateApp)
router.delete('/:id', deleteApp)

export default router