import * as placeService from '../services/placeService.js';

/**
 * Handles fetching all places successfully.
 */
export const getAllPlaces = async (req, res) => {
  try {
    const places = await placeService.fetchAllPlaces();
    res.status(200).json(places);
  } catch (error) {
    console.error("Error in getAllPlaces controller:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Handles fetching a single place by specific ID.
 */
export const getPlaceById = async (req, res) => {
  try {
    const place = await placeService.fetchPlaceById(req.params.id);
    if (!place) {
        return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(place);
  } catch (error) {
    console.error("Error in getPlaceById controller:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Handles Search routing for filtered destinations via Service abstraction.
 */
export const searchPlaces = async (req, res) => {
  try {
    const filteredPlaces = await placeService.filterPlaces(req.query);
    res.status(200).json(filteredPlaces);
  } catch (error) {
    console.error("Error in searchPlaces controller:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
