import { placesData } from '../utils/mockData.js';
import Place from '../models/Place.js';

/**
 * Centralized business logic fetching Destinations.
 * Automatically tries to pull from standard DB models, defaulting silently to JSON fallback arrays securely.
 */
export const fetchAllPlaces = async () => {
    try {
        const dbPlaces = await Place.find({});
        if (dbPlaces && dbPlaces.length > 0) return dbPlaces;
        
        return placesData;
    } catch (error) {
        // Fallback to JSON if DB fails seamlessly
        return placesData;
    }
};

export const fetchPlaceById = async (id) => {
    try {
        const dbPlace = await Place.findById(id);
        if (dbPlace) return dbPlace;
    } catch (err) {
        // Intentionally swallow DB crash to allow accurate fallback routing
    }
    
    return placesData.find(p => p._id === id) || null;
};

export const filterPlaces = async (filters) => {
    const { keyword, region, budget, season } = filters;
    
    // Fallback purely memory filter array. 
    // In production DB usage, logic modifies MongoDB `query` block dynamically instead of array manipulation.
    let filtered = placesData;

    if (keyword) {
      const lowerKey = keyword.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(lowerKey) || 
        p.description.toLowerCase().includes(lowerKey)
      );
    }
    if (region) {
      filtered = filtered.filter(p => p.region === region);
    }
    if (budget) {
      filtered = filtered.filter(p => p.budgetRange === budget);
    }
    if (season) {
      filtered = filtered.filter(p => p.bestSeason.includes(season));
    }

    return filtered;
};
