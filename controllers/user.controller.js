import userModel from "../DB/models/user.model.js"







export const userBYID = async (req, res) => {
    
    const user = await userModel.findById({ _id: req.params.id })

    res.json({ message: "Done", user })
}


export const updateUser = async (req, res) => {

    const { id } = req.params; //id user _id
    const { age, email } = req.body
    

    const user = await userModel.findByIdAndUpdate(id,
        {
           email, age
        }, {
        new: true
    })

    

    res.json({ message: "Done", user })
}

export const updateGroup = async (req, res) => {

    
    //const { age,lastName} = req.body
   

    const users = await userModel.updateMany( {age:req.query.age},
        { $set: { "updated" : true } },
        { strict: false }
    )

    

    res.json({ message: "Done", users })
}

export const deleteUser = async (req, res) => {

    const { id } = req.params; //id user _id
    const user = await userModel.findOneAndDelete({ _id: id }) //object null
   
    res.json({ message: "Done", user })
}

export const deleteGroup = async (req, res) => {

    
    const users = await userModel.deleteMany({ age:req.query.age }) //object null
    
    res.json({ message: "Done", users })
}

export const allUsersByFirstLastName = async (req, res) => {

    const userList = await userModel.find( { $or: [ { firstName: {$regex : /a/} }, { lastName:{$regex : /a/}} ] } )
    res.json({ message: "Done", userList })
}

export const allUsersByFirstName = async (req, res) => {

    const userList = await userModel.find(   { firstName: {$regex : "ami"} } )
    res.json({ message: "Done", userList })
}

export const allUsersByFirstNameAndAge = async (req, res) => {

    const userList = await userModel.find(  { $and: [ { firstName: {$regex : /a$/} }, { age:{$gte : 20}} ] }  )
    res.json({ message: "Done", userList })
}
export const allUsersByName = async (req, res) => {

   const userList = await userModel.find(  { $and: [ { firstName: {$regex : /^a/} }, { age:{$lte : 30}} ] },{ firstName:1 ,lastName:1} )
   
    res.json({ message: "Done",userList })
}
