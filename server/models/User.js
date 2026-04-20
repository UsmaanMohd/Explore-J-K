import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  savedItineraries: [{ type: Object }] // For simplicity, saving structured data as object
}, { timestamps: true });

export default mongoose.model('User', userSchema);
