import Hotel from '../models/Hotel.js';
import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send("Hello, this is hotels endpoint!")
// })

// CREATE
router.post('/', verifyAdmin, createHotel)
// UPDATE
router.put('/:id', verifyAdmin, updateHotel)
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)
// GET
router.get('/:id', getHotel)
// GET ALL
router.get('/', getHotels)

export default router