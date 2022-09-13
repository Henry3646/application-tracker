import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

export const signin = async (req, res) => {
    const { user, password } = req.body;

    try {
        const existingUser = await User.findOne({ user })

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" })

        const token = jwt.sign({ user: existingUser.user, id: existingUser._id }, 'test', { expiresIn: '1h'})

        res.status(200).json({ result: existingUser, token })
        
    } catch (error) {
        res.status(500).json({ message: 'something went wrong'})
    }
}

export const signup = async (req, res) => {
    const { user, password, confirmpassword } = req.body
    
    try {
        const existingUser = await User.findOne({ user })

        if(existingUser) return res.status(404).json({ message: "User already exists" })

        if(password !== confirmpassword) return res.status(400).json({ message: "passwords don't match" })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({user, password: hashedPassword})

        const token = jwt.sign({ user: result.user, id: result._id }, 'test', { expiresIn: '1h'})

        res.status(200).json({ result: result, token })

    } catch (error) {
        res.status(500).json({ message: 'something went wrong'})
    }
}