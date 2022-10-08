import userModel from '../DB/models/user.model.js'
import bcrypt from 'bcrypt'
export const signup = async (req, res) => {
    try {
        const { firstName, lastName,age,email, password, cpassword } = req.body
        if (password === cpassword) {
            const user = await userModel.findOne({ email }) // object null
            if (user) {
                res.json({ message: "Email exist" })
            } else {
                const hashPassword = await bcrypt.hash(password, 8)
                console.log(hashPassword);
                const newUser = new userModel({ firstName, lastName,age, email, password: hashPassword })
                const savedUser = await newUser.save()
                res.json({ message: "Done", savedUserID: savedUser._id })
            }
        } else {
            res.json({ message: "password and cPassword dosn't match" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }
}


export const signin = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })//object , null
    if (!user) {
        res.json({ message: "in-valid account" })
    } else {
        console.log({ password });
        console.log(user.password);
        const match = await bcrypt.compare(password, user.password)
        console.log({ match });
        if (!match) {
            res.json({ message: "in-valid account data (password in-valid)" })
        } else {
            res.json({ message: "Done", user })
        }
    }
} 