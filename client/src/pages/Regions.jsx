import { Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const regionsData = [
  {
    id: 'kashmir',
    name: 'Kashmir Valley',
    overview: 'Known as "Paradise on Earth", famous for its beautiful Dal Lake, Mughal Gardens, and snow-capped peaks in Gulmarg.',
    keyPlaces: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    color: 'from-emerald-500/20 to-teal-900/40'
  },
  {
    id: 'jammu',
    name: 'Jammu Region',
    overview: 'The City of Temples, home to the holy shrine of Mata Vaishno Devi and historical forts along the Tawi River.',
    keyPlaces: ['Vaishno Devi', 'Patnitop', 'Bahu Fort', 'Mansar Lake'],
    image: 'https://images.unsplash.com/photo-1563821703666-daebcc3e2448?auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-500/20 to-orange-900/40'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    overview: 'The land of high passes. A spectacular high-altitude desert known for breathtaking lakes, monasteries, and Tibetan culture.',
    keyPlaces: ['Leh', 'Pangong Lake', 'Nubra Valley', 'Tso Moriri'],
    image: 'https://images.unsplash.com/photo-1598449704482-1cedfbefcf67?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500/20 to-indigo-900/40'
  },
  {
    id: 'pir-panjal',
    name: 'Pir Panjal',
    overview: 'A majestic mountain range offering incredible trekking routes, lush meadows, and historical passes like the Mughal Road.',
    keyPlaces: ['Poonch', 'Rajouri', 'Bafliaz', 'Peer Ki Gali'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500/20 to-fuchsia-900/40'
  },
  {
    id: 'chenab',
    name: 'Chenab Valley',
    overview: 'A river valley renowned for high-altitude saffron fields, sapphire mines, and steep gorge drives along the mighty Chenab.',
    keyPlaces: ['Kishtwar', 'Doda', 'Bhaderwah', 'Ramban'],
    image: 'https://images.unsplash.com/photo-1549800076-25816999a803?auto=format&fit=crop&w=800&q=80',
    color: 'from-rose-500/20 to-red-900/40'
  }
];

const Regions = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">5 Unique Regions</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Dive into the distinct landscapes, cultures, and vibes of Jammu & Kashmir.
        </p>
      </motion.div>

      <div className="space-y-24">
        {regionsData.map((region, index) => (
          <motion.section 
            key={region.id}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden glass p-2 w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br opacity-50 mix-blend-overlay ${region.color}" />
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-6 h-6 text-brand" />
                <span className="uppercase tracking-widest text-brand font-semibold text-sm">Region Overview</span>
              </div>
              <h2 className="text-4xl font-display font-bold">{region.name}</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {region.overview}
              </p>
              
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold mb-4 text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Iconic Scenery
                </h4>
                <div className="flex flex-wrap gap-3">
                  {region.keyPlaces.map(place => (
                    <span key={place} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-200 shadow-sm">
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Regions;
