import express from 'express'
import {createUser,getUsers,updateUser,deleteUser} from '../controller/userLogic.js'

const router = express.Router()

router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.put('/updateuser/:userid', updateUser)
router.delete('/deleteuser/:userid', deleteUser)
export default router