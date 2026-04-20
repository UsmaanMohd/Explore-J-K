import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard.jsx';
import { placesData } from '../data/mockData.js';

const Places = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [places, setPlaces] = useState(placesData);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    // 100% Frontend filtering!
    let filtered = placesData;

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedRegion) {
      filtered = filtered.filter(p => p.region === selectedRegion);
    }

    setPlaces(filtered);
  }, [searchTerm, selectedRegion]);

  const regionsList = ['Kashmir Valley', 'Jammu Region', 'Ladakh'];

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Discover Destinations</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          From lush valleys to high altitude deserts, find your perfect escape in Jammu & Kashmir.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <div className="glass rounded-2xl p-4 mb-10 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for lakes, valleys, passes..." 
            className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <button 
            className={`px-4 py-3 rounded-xl whitespace-nowrap text-sm font-medium transition-all ${selectedRegion === '' ? 'bg-brand text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            onClick={() => setSelectedRegion('')}
          >
            All Regions
          </button>
          {regionsList.map(r => (
            <button 
              key={r}
              className={`px-4 py-3 rounded-xl whitespace-nowrap text-sm font-medium transition-all ${selectedRegion === r ? 'bg-brand text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setSelectedRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {places.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800">
          <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-slate-300">No destinations found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your filters or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, idx) => (
            <PlaceCard key={place._id} place={place} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Places;
