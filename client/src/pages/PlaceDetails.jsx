import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { 
  MapPin, Mountain, ArrowLeft, Calendar, Wallet, CheckCircle2, 
  Image as ImageIcon, Loader2, Sparkles, Star, Map as MapIcon, 
  Clock, Thermometer, Wifi, ChevronRight, X, Car, Navigation, Camera,
  Utensils, Hotel, TramFront
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { placesData } from '../data/mockData.js';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  
  // Gallery Modal State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Map Modal State
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // AI Planner States
  const [aiBudget, setAiBudget] = useState(5000);
  const [aiStyle, setAiStyle] = useState('Adventure');

  // Grab the specific deep-rich place data
  const place = placesData.find(p => p._id === id);

  if (!place) return <div className="text-center mt-20 text-2xl font-bold">Destination not found!</div>;

  const handleGenerate = () => {
    setIsGenerating(true);
    setItinerary(null);
    
    // Simulate AI loading delay
    setTimeout(() => {
      setIsGenerating(false);
      setItinerary({
        message: "Smart Itinerary successfully compiled based on your parameters!",
        days: [
          {
            day: "Day 1: Arrival & Exploration",
            desc: `Arrive and settle into your ${aiBudget > 10000 ? 'luxury resort' : 'cozy stay'}. Head out to explore the core of ${place.name}. Focus on ${place.activities[0] || 'sightseeing'} and acclimatizing to the ${place.altitude} altitude.`
          },
          {
            day: "Day 2: The Action-Packed Journey",
            desc: `Focus wholly on ${aiStyle.toLowerCase()}. You'll visit the stunning spots like ${place.nearbyPlacesCards?.[0]?.name || 'the primary landmarks'}. The perfect conditions of ${place.temperature} make this epic.`
          },
          {
            day: "Day 3: Reflection & Departure",
            desc: `A gentle morning enjoying the scenic panoramic views. Stop by local stalls for souvenirs before heading off towards your next destination.`
          }
        ]
      });
    }, 2500);
  };

  const nextImage = () => setActiveImageIdx((prev) => (prev + 1) % place.images.length);
  const prevImage = () => setActiveImageIdx((prev) => (prev === 0 ? place.images.length - 1 : prev - 1));

  return (
    <div className="w-full bg-slate-950 pb-24 text-slate-200">
      
      {/* ======================= */}
      {/* 1. PREMIUM HERO SECTION */}
      {/* ======================= */}
      <div className="h-[80vh] relative flex items-end">
        {/* Navigation Back Button floating top left */}
        <div className="absolute top-8 left-8 z-20">
          <Link to="/places" className="inline-flex items-center gap-2 text-slate-100 hover:text-white bg-black/40 px-5 py-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:bg-black/60 shadow-lg font-medium">
            <ArrowLeft className="w-5 h-5" /> All Destinations
          </Link>
        </div>

        <img 
          src={place.images[0]} 
          alt={place.name} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Massive dark gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/10" />
        
        <div className="relative z-10 w-full p-8 md:p-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-12">
          <div className="flex-1">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-brand text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Star className="w-4 h-4 fill-white" /> {place.rating}
              </div>
              <span className="text-brandLight font-medium tracking-wider uppercase text-sm">{place.region}</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {place.name}
            </motion.h1>
            <motion.p 
              className="text-2xl text-slate-300 font-light max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              "{place.tagline}"
            </motion.p>
          </div>

          <motion.div 
            className="flex gap-4 w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-slate-800/80 backdrop-blur-md hover:bg-slate-700 text-white font-bold transition-all border border-slate-600 flex items-center justify-center gap-2">
              <MapIcon className="w-5 h-5" /> View Map
            </button>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-brand hover:bg-brandLight text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
              Plan Trip <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* ======================= */}
        {/* 4. TRAVEL INFO CARDS */}
        {/* ======================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="p-3 bg-brand/20 rounded-xl"><Car className="text-brand w-6 h-6" /></div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Distance</p>
              <p className="text-lg font-bold text-white leading-tight">{place.distanceFromSrinagar}</p>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="p-3 bg-emerald-500/20 rounded-xl"><Clock className="text-emerald-400 w-6 h-6" /></div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Travel Time</p>
              <p className="text-lg font-bold text-white leading-tight">{place.travelTime}</p>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="p-3 bg-amber-500/20 rounded-xl"><Calendar className="text-amber-400 w-6 h-6" /></div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Best Season</p>
              <p className="text-lg font-bold text-white leading-tight">{place.bestSeason.join(', ')}</p>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="p-3 bg-fuchsia-500/20 rounded-xl"><Mountain className="text-fuchsia-400 w-6 h-6" /></div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Altitude</p>
              <p className="text-lg font-bold text-white leading-tight">{place.altitude}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* The Destination Story */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-white row flex items-center gap-3">
                Overview
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line font-light">
                {place.description}
              </p>
            </section>

            {/* ======================= */}
            {/* 9. WHY VISIT BULLETS */}
            {/* ======================= */}
            <section className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <h2 className="text-2xl font-display font-bold mb-6 text-white flex items-center gap-2">
                <Star className="text-amber-400 w-6 h-6" /> Why Visit {place.name}?
              </h2>
              <div className="space-y-4">
                {place.whyVisit?.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 text-brand">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-slate-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ======================= */}
            {/* 8. QUICK FACTS */}
            {/* ======================= */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
                 <Thermometer className="w-8 h-8 text-rose-400" />
                 <div>
                    <h4 className="text-slate-400 text-sm">Avg Temperature</h4>
                    <p className="text-xl font-bold text-white">{place.temperature}</p>
                 </div>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
                 <Wifi className="w-8 h-8 text-cyan-400" />
                 <div>
                    <h4 className="text-slate-400 text-sm">Connectivity</h4>
                    <p className="text-xl font-bold text-white">{place.network}</p>
                 </div>
              </div>
            </section>

            {/* ======================= */}
            {/* 6. PHOTO GALLERY */}
            {/* ======================= */}
            <section>
              <div className="flex justify-between items-end mb-6">
                 <h2 className="text-3xl font-display font-bold flex items-center gap-3 text-white">
                   <ImageIcon className="text-brand w-8 h-8" /> Visual Journey
                 </h2>
                 <p className="text-slate-400 text-sm cursor-pointer hover:text-brand" onClick={() => setIsGalleryOpen(true)}>View All Photos →</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {place.images.slice(0, 3).map((imgUrl, i) => (
                  <div key={i} onClick={() => { setActiveImageIdx(i); setIsGalleryOpen(true); }} className="h-56 rounded-2xl overflow-hidden glass-card group cursor-pointer relative">
                     <img src={imgUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Scenery" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
                     </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ======================= */}
            {/* 3. BUDGET SECTION */}
            {/* ======================= */}
            <section>
               <h2 className="text-3xl font-display font-bold mb-6 text-white flex items-center gap-3">
                 <Wallet className="text-emerald-400 w-8 h-8" /> Daily Costs & Breakdown
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="border border-slate-700 bg-slate-900/40 p-6 rounded-2xl text-center hover:border-emerald-500/50 transition-colors cursor-pointer" onClick={() => setAiBudget(place.budgetTiers?.budget || 1500)}>
                     <p className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-2">Budget</p>
                     <p className="text-4xl font-light text-white mb-2">₹{place.budgetTiers?.budget || 1500}</p>
                     <p className="text-slate-400 text-sm">Hostels, local transport, street food.</p>
                  </div>
                  <div className="border border-brand/50 bg-brand/10 p-6 rounded-2xl text-center transform md:-translate-y-2 shadow-[0_10px_30px_rgba(59,130,246,0.15)] relative cursor-pointer" onClick={() => setAiBudget(place.budgetTiers?.mid || 4000)}>
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
                     <p className="text-brandLight font-bold tracking-wider text-sm uppercase mb-2">Mid-Range</p>
                     <p className="text-4xl font-bold text-white mb-2">₹{place.budgetTiers?.mid || 4000}</p>
                     <p className="text-slate-300 text-sm">Standard hotels, cabs, nice restaurants.</p>
                  </div>
                  <div className="border border-slate-700 bg-slate-900/40 p-6 rounded-2xl text-center hover:border-purple-500/50 transition-colors cursor-pointer" onClick={() => setAiBudget(place.budgetTiers?.luxury || 15000)}>
                     <p className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-2">Luxury</p>
                     <p className="text-4xl font-light text-white mb-2">₹{place.budgetTiers?.luxury || 15000}+</p>
                     <p className="text-slate-400 text-sm">5-Star stays, private tours, fine dining.</p>
                  </div>
               </div>

               {/* Dynamic Breakdown Engine based on AI Budget */}
               <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="text-xl font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand" /> Dynamic Allocation Guide</h3>
                     <span className="text-brandLight font-bold text-xl">₹{aiBudget}/day</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full h-3 rounded-full flex overflow-hidden mb-6">
                     <div className="bg-fuchsia-500 hover:opacity-80 transition-opacity" style={{width: '45%'}} title="Stay (45%)"></div>
                     <div className="bg-amber-500 hover:opacity-80 transition-opacity" style={{width: '30%'}} title="Food (30%)"></div>
                     <div className="bg-emerald-500 hover:opacity-80 transition-opacity" style={{width: '25%'}} title="Travel (25%)"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/50">
                        <Hotel className="w-6 h-6 text-fuchsia-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-400 uppercase font-bold">Stay (45%)</p>
                        <p className="text-lg font-bold text-white">₹{Math.round(aiBudget * 0.45)}</p>
                     </div>
                     <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/50">
                        <Utensils className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-400 uppercase font-bold">Food (30%)</p>
                        <p className="text-lg font-bold text-white">₹{Math.round(aiBudget * 0.30)}</p>
                     </div>
                     <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/50">
                        <TramFront className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-400 uppercase font-bold">Travel (25%)</p>
                        <p className="text-lg font-bold text-white">₹{Math.round(aiBudget * 0.25)}</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* ======================= */}
            {/* 7. NEARBY PLACES CARDS */}
            {/* ======================= */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-white">Nearby Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(place.nearbyPlacesCards || []).map((np, idx) => (
                  <div key={idx} className="flex bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-brand/50 transition-colors cursor-pointer group">
                    <div className="w-1/3 min-h-[120px] overflow-hidden">
                       <img src={np.image} alt={np.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                       <h4 className="text-lg font-bold text-white mb-1">{np.name}</h4>
                       <p className="text-sm text-slate-400 line-clamp-2 mb-2">{np.desc}</p>
                       <span className="text-xs font-medium text-brand bg-brand/10 inline-flex items-center gap-1 px-2 py-1 rounded-md self-start">
                         <Car className="w-3 h-3" /> {np.distance}
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Sticky Planners & Maps) */}
          <div className="space-y-8">
             
            {/* ======================= */}
            {/* 2. MAP INTEGRATION & ROUTE */}
            {/* ======================= */}
            <div className="glass-card p-2 rounded-3xl overflow-hidden border border-slate-800">
               {/* Real Leaflet Map */}
               <div className="w-full h-56 bg-slate-800 rounded-2xl relative overflow-hidden group">
                  {place.coordinates && (
                    <MapContainer center={[place.coordinates.lat, place.coordinates.lng]} zoom={11} scrollWheelZoom={false} className="w-full h-full z-0">
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com/">Carto</a>'
                      />
                      <Marker position={[place.coordinates.lat, place.coordinates.lng]}>
                        <Popup className="rounded-xl overflow-hidden font-sans">
                           <strong className="text-brand">{place.name}</strong><br/>{place.altitude}
                        </Popup>
                      </Marker>
                      {/* Show lines to nearby places if available */}
                      {place.nearbyPlacesCards?.map((np, idx) => {
                         const matchPlace = placesData.find(p => np.name.includes(p.name) || p.name.includes(np.name));
                         if (matchPlace && matchPlace.coordinates) {
                           return (
                             <React.Fragment key={idx}>
                               <Marker position={[matchPlace.coordinates.lat, matchPlace.coordinates.lng]}>
                                 <Popup>{matchPlace.name}</Popup>
                               </Marker>
                               <Polyline positions={[
                                 [place.coordinates.lat, place.coordinates.lng],
                                 [matchPlace.coordinates.lat, matchPlace.coordinates.lng]
                               ]} color="#3b82f6" weight={3} dashArray="5, 10" />
                             </React.Fragment>
                           );
                         }
                         return null;
                      })}
                    </MapContainer>
                  )}
                  {/* Overlay buttons so they don't block interaction completely but stay above map */}
                  <div className="absolute top-2 right-2 z-[999] pointer-events-none">
                     <span className="bg-emerald-500/90 shadow-lg backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white border border-emerald-400 flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> Live Map
                     </span>
                  </div>
               </div>
               <div className="p-4 space-y-3">
                 <button onClick={() => setIsMapModalOpen(true)} className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium border border-slate-700 transition-colors flex items-center justify-center gap-2">
                    <MapIcon className="w-4 h-4 text-brand" /> View Full Route Map
                 </button>
                 
                 {/* 10. ROUTE FEATURE */}
                 <button onClick={() => setIsMapModalOpen(true)} className="w-full py-4 rounded-xl bg-gradient-to-r from-brand to-cyan-500 hover:from-brandLight hover:to-cyan-400 text-white font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group">
                    <Navigation className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Optimize Travel Path
                 </button>
                 <p className="text-center text-xs text-slate-500">Auto-routes across multiple destinations</p>
               </div>
            </div>

            {/* ======================= */}
            {/* 5. AI PLANNER UPGRADE */}
            {/* ======================= */}
            <div className="glass-card p-8 rounded-3xl sticky top-28 border-t-4 border-t-brand">
              <h3 className="text-2xl font-display font-bold mb-2 text-white flex items-center gap-2">
                 <Sparkles className="text-brand w-6 h-6" /> AI Smart Planner
              </h3>
              <p className="text-slate-400 mb-6 text-sm">Configure your exact constraints and let the AI build your timeline.</p>
              
              <div className="space-y-6 mb-8">
                {/* Budget Slider */}
                <div>
                   <div className="flex justify-between text-sm mb-2 text-slate-300">
                     <label>Max Budget</label>
                     <span className="font-bold text-brandLight">₹{aiBudget}</span>
                   </div>
                   <input type="range" min="1000" max="30000" step="1000" value={aiBudget} onChange={(e)=>setAiBudget(Number(e.target.value))} className="w-full accent-brand" />
                   <div className="flex justify-between text-xs text-slate-500 mt-1">
                     <span>₹1k</span><span>₹30k+</span>
                   </div>
                </div>

                {/* Travel Type */}
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Travel Companions</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-brand">
                    <option>Solo Explorer</option>
                    <option>Couple / Romantic</option>
                    <option>Family Trip</option>
                    <option>Friends Group</option>
                  </select>
                </div>

                {/* Interests Pills */}
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Trip Style Focus</label>
                  <div className="flex flex-wrap gap-2">
                     {['Adventure', 'Nature', 'Photography', 'Culture'].map(style => (
                        <button key={style} onClick={() => setAiStyle(style)} className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${aiStyle === style ? 'bg-brand/20 border-brand text-brandLight' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'}`}>
                           {style}
                        </button>
                     ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brandLight text-white font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] disabled:opacity-70 disabled:cursor-wait"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Compiling Physics...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Generate Premium Itinerary
                  </>
                )}
              </button>

              <AnimatePresence>
                {itinerary && (
                  <motion.div 
                    className="mt-6 pt-6 border-t border-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <h4 className="text-brandLight font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Ready for Action
                    </h4>
                    <div className="relative border-l-2 border-slate-800 ml-2 space-y-6 pb-2">
                      {itinerary.days.map((day, dIdx) => (
                        <div key={dIdx} className="relative pl-6">
                          <div className="absolute w-3 h-3 bg-brand rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                          <h5 className="font-bold text-white mb-1">{day.day}</h5>
                          <p className="text-sm text-slate-400 leading-relaxed">{day.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= */}
      {/* FULL SCREEN GALLERY MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <button onClick={() => setIsGalleryOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white p-2">
                <X className="w-8 h-8" />
             </button>

             <motion.img 
                key={activeImageIdx}
                src={place.images[activeImageIdx]} 
                alt="Fullscreen Preview"
                className="max-h-[80vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
             />
             
             <div className="absolute bottom-10 flex gap-6 mt-6">
                <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium backdrop-blur-md transition-all">← Prev</button>
                <span className="flex items-center text-slate-400 font-medium">{activeImageIdx + 1} / {place.images.length}</span>
                <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium backdrop-blur-md transition-all">Next →</button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= */}
      {/* FULL SCREEN MAP MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {isMapModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <button onClick={() => setIsMapModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 bg-slate-900 rounded-full z-[110] transition-colors border border-slate-700">
                <X className="w-6 h-6" />
             </button>

             <motion.div 
                className="w-full h-full max-h-[85vh] max-w-6xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col relative"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
             >
                <div className="p-5 border-b border-slate-800 bg-slate-900 flex items-center justify-between z-10 relative">
                   <h3 className="text-xl font-bold text-white flex items-center gap-2">
                     <MapIcon className="text-brand w-5 h-5" /> Interactive Travel Route
                   </h3>
                   <span className="text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Explore all J&K destinations</span>
                </div>
                <div className="flex-1 relative bg-slate-800 w-full h-full z-0">
                  {place.coordinates && (
                    <MapContainer center={[place.coordinates.lat, place.coordinates.lng]} zoom={8} className="w-full h-full z-0">
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com/">Carto</a>'
                      />
                      {placesData.filter(p => p.coordinates).map((p, idx) => (
                        <Marker key={idx} position={[p.coordinates.lat, p.coordinates.lng]}>
                          <Popup>
                            <div className="font-sans">
                              <img src={p.images[0]} alt={p.name} className="w-full h-24 object-cover rounded-md mb-2" />
                              <strong className="text-brand text-lg block mb-1">{p.name}</strong>
                              <p className="text-xs text-slate-600 mb-2">{p.tagline}</p>
                              {p._id !== place._id && (
                                <Link to={`/places/${p._id}`} onClick={() => setIsMapModalOpen(false)} className="bg-brand hover:bg-brandLight text-white px-3 py-2 rounded text-xs w-full block text-center mt-1 transition-colors font-bold">
                                  View Destination
                                </Link>
                              )}
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                      {/* Main connecting line for visualization */}
                      <Polyline positions={placesData.filter(p => p.coordinates).map(p => [p.coordinates.lat, p.coordinates.lng])} color="#3b82f6" weight={3} opacity={0.6} dashArray="5, 10" />
                    </MapContainer>
                  )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default PlaceDetails;
