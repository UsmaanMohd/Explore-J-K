import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true }, // e.g., 'Kashmir Valley', 'Ladakh'
  bestSeason: [{ type: String }],
  budgetRange: { type: String }, // 'low', 'medium', 'high'
  budgetEstimate: { type: Number },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number },
  },
  images: [{ type: String }], // Array of image URLs
  activities: [{ type: String }], // Array of activities available
  nearbyPlaces: [{ type: String }], 
  travelOptions: {
    flight: { type: String },
    train: { type: String },
    road: { type: String }
  },
  altitude: { type: String },
  type: { type: String } // e.g., 'Lake', 'Valley', 'Hill Station'
}, { timestamps: true });

export default mongoose.model('Place', placeSchema);
