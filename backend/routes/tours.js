import express from 'express'
import { createTour,updateTour,deleteTour,getAllTour,getSingleTour,getTourBySearch,getFeaturedTour,getTourCount } from '../controllers/tourControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router()

//Create new tour 
router.post('/', verifyAdmin, createTour);

//Update tour 
router.put('/:id', verifyAdmin, updateTour);

//Delete tour 
router.delete('/:id', verifyAdmin, deleteTour);

//Get single tour 
router.get('/:id', getSingleTour);

//Get all tour 
router.get('/', getAllTour);

//Get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)




export default router