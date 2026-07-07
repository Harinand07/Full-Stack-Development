import express from 'express';
import { getUser } from '../controller/userlogic.js';
import { addUser } from '../controller/userlogic.js';
import { updateUser } from '../controller/userlogic.js';
import { deleteUser } from '../controller/userlogic.js';
const route = express.Router();

route.get('/getuser', getUser)
route.post('/adduser', addUser)
route.put('/updateuser', updateUser)
route.delete('/deleteuser', deleteUser)

export default route;
