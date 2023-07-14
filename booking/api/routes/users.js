import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import User from '../models/User.js';
import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

// UPDATE
router.put('/:id', verifyUser, updateUser)
// DELETE
// router.delete('/:id', verifyUser, deleteUser)
router.delete('/:id', deleteUser)
// GET
router.get('/:id', verifyUser, getUser)
// GET ALL
// router.get('/', verifyAdmin, getUsers)
router.get('/', getUsers) // fizo isso para aparecer os users no admin

export default router