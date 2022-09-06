import mongoose from "mongoose"
import Application from "../models/application.js"

export const getApps = async (req, res) => {
    try {
        const applications = await Application.find()
        console.log(applications)

        res.status(200).json(applications)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createApp = async (req, res) => {
    const application = req.body
    const newApplication = new Application(application)
    try {
        await newApplication.save()
        res.status(201).json(newApplication)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateApp = async (req, res) => {
    const { id: _id } = req.params;
    const app = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No application with that id')

    const updatedApp = await Application.findByIdAndUpdate(_id, app, { new: true })

    res.json(updatedApp)
}

export const deleteApp = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No application with that id')

    await Application.findByIdAndRemove(id)

    res.json({ message: 'Post deleted successfully' })
}