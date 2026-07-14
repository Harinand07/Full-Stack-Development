import User from '../model/user.js'

const createUser = async (req, res) => {
    try {
        const { name, email, mobileNumber, empId, designation, age } = req.body

        if (!name || !email || !mobileNumber || !empId || !designation || age === undefined || age === null) {
            return res.status(400).json({
                message: 'name, email, mobileNumber, empId, designation, and age are required'
            })
        }

        const user = await User.create({ name, email, mobileNumber, empId, designation, age })

        res.status(201).json({
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
        const { userid } = req.params
        const { name, email, mobileNumber, empId, designation, age } = req.body

        if (!userid) {
            return res.status(400).json({
                success: false,
                message: 'userid not found!!'
            })
        }

        const user = await User.findById(userid)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }

        const updateData = {}
        if (name !== undefined) updateData.name = name
        if (email !== undefined) updateData.email = email
        if (mobileNumber !== undefined) updateData.mobileNumber = mobileNumber
        if (empId !== undefined) updateData.empId = empId
        if (designation !== undefined) updateData.designation = designation
        if (age !== undefined) updateData.age = age

        const updatedUser = await User.findByIdAndUpdate(userid, updateData, { new: true })

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

// delete data
const deleteUser = async (req, res) => {
    try {
        const { userid } = req.params

        const deletedUser = await User.findByIdAndDelete(userid)
        res.status(200).json({
            success: true,
            message: 'user deleted successfully',
            deletedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error occurred while deleting user',
            error
        })
    }
}

export { createUser, getUsers, updateUser, deleteUser }