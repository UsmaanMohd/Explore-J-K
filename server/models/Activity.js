import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String }, // e.g., 'Easy', 'Moderate', 'Hard'
  bestSeason: { type: String },
  costEstimate: { type: String },
  image: { type: String },
  locations: [{ type: String }] // Places where this activity is famous
}, { timestamps: true });

export default mongoose.model('Activity', activitySchema);
