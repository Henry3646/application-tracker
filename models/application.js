import mongoose from "mongoose";

const appSchema = mongoose.Schema({
    company: String,
    role: String,
    status: String,
    dateApplied: String,
    apptrackerURL: String
})

const Application = mongoose.model('Application', appSchema)

export default Application