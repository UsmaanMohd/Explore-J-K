import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place, index }) => {
  return (
    <motion.div 
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10 text-white">
          {place.type}
        </div>
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand/80 backdrop-blur-md rounded-full text-xs font-medium border border-brand/20 text-white">
          {place.bestSeason && place.bestSeason[0]}
        </div>
        <img 
          src={place.images[0]} 
          alt={place.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-darkBg to-transparent" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow relative -mt-4 bg-darkBg">
        <h3 className="text-xl font-bold mb-1 text-white">{place.name}</h3>
        <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
          <MapPin className="w-3 h-3 text-brand" />
          <span>{place.region}</span>
          <span className="mx-1">•</span>
          <span>{place.altitude}</span>
        </div>
        
        <p className="text-slate-300 text-sm line-clamp-2 mb-4 flex-grow">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1">
            {place.activities.slice(0, 2).map((act, idx) => (
              <span key={idx} className="px-2 py-1 rounded bg-slate-800 text-[10px] text-brandLight border border-slate-700">
                {act}
              </span>
            ))}
          </div>
          <Link to={`/places/${place._id}`} className="flex items-center justify-center p-2 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-all">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;
