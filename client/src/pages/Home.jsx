import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { placesData } from '../data/mockData.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Serve Top 6 places directly from frontend data
  const featuredPlaces = placesData.slice(0, 6);

  const handleSearch = () => {
    if(searchQuery) {
      navigate(`/places?search=${searchQuery}`);
    } else {
      navigate('/places');
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Gradient Background */}
        <div className="absolute inset-0 bg-darkBg z-0" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand/30 blur-[120px] rounded-full z-0 mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[100px] rounded-full z-0 mix-blend-screen" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore <span className="text-gradient">Jammu & Kashmir</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Heaven on Earth — Discover every iconic destination
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="flex items-center gap-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search places, regions, activities..." 
                className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-brand/50 placeholder:text-slate-400 text-lg shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button onClick={handleSearch} className="px-8 py-4 rounded-full bg-brand hover:bg-brandLight text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Places Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Featured Destinations</h2>
            <p className="text-slate-400">Handpicked locations for your next adventure</p>
          </div>
          <button onClick={() => navigate('/places')} className="text-brand hover:text-brandLight font-medium flex items-center gap-1 group">
            View All <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place, idx) => (
            <motion.div 
              onClick={() => navigate(`/places/${place._id}`)}
              key={place._id} 
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10 text-white">
                  {place.type}
                </div>
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand/80 backdrop-blur-md rounded-full text-xs font-medium border border-brand/20 text-white">
                  {place.bestSeason[0]}
                </div>
                <img 
                  src={place.images[0]} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/20 to-transparent" />
              </div>
              
              <div className="p-6 relative -mt-10 bg-darkBg">
                <h3 className="text-xl font-bold mb-1 text-white">{place.name}</h3>
                <div className="flex items-center gap-1 text-sm text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 text-brand" />
                  <span>{place.region}</span>
                  <span className="mx-2">•</span>
                  <span>{place.altitude}</span>
                </div>
                <p className="text-slate-300 text-sm line-clamp-2 mb-6">
                  {place.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {place.activities.slice(0, 3).map(act => (
                    <span key={act} className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
