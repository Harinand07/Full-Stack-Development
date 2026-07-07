import User from '../model/user.js'

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const empId = req.body.empId ?? req.body.empid

        console.log('request body:', req.body)

        if (!name || !email || !empId) {
            return res.status(400).json({
                message: 'name, email, and empId are required'
            })
        }

        const user = await User.create({ name, email, empId })

        console.log(user)

        res.status(200).json({
            success: true,
            message: 'data created successfully...',
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'data has not created',
            error
        })
    }
}

// read data
const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: 'no users found',
                success: false
            })
        }

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error occurred while fetching users',
            error
        })
    }
}

// update data
const updateUser = async (req, res) => {
    try {
        let {name,email,empId } = req.body
        let {userid} = req.params

        if (!userid) {
            return res.status(400).json({
                success: false,
                message: 'userid not found!!'
            })
        }

        let user = await User.findById(userid)
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }

        let updatedUser = user

        if(name){
            updatedUser = await User.findByIdAndUpdate(userid, {name},{new:true})
        }

        if(email){
            updatedUser = await User.findByIdAndUpdate(userid, {email},{new:true})
        }

        if(empId){
            updatedUser = await User.findByIdAndUpdate(userid, {empId},{new:true})
        }

        res.status(200).json({
            success: true,
            message: 'user updated successfully',
            updatedUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error occurred while updating user',
            error
        })
    }
}

// // delete data
   const deleteUser = async (req, res) => {
    try{
        const {userid} = req.params

        let deletedUser = await User.findByIdAndDelete(userid)
        res.status(200).json({
            success: true,
            message: 'user deleted successfully',
            deletedUser
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'error occurred while deleting user',
            errors
        })
    }
   }


export { createUser, getUsers, updateUser, deleteUser }