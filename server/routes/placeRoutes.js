import express from 'express';
import { getAllPlaces, getPlaceById, searchPlaces } from '../controllers/placeController.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/search', searchPlaces);
router.get('/:id', getPlaceById);

export default router;
