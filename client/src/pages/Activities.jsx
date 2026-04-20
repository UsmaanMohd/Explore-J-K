import { motion } from 'framer-motion';

const activitiesData = [
  {
    name: 'Skiing & Winter Sports',
    location: 'Gulmarg',
    difficulty: 'All Levels',
    season: 'Winter (Dec - March)',
    cost: '₹3,000 - ₹5,000 / day',
    desc: 'Hit the powder snow in Asia\'s premier alpine ski destination with varying slopes.',
    image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Trekking & Hiking',
    location: 'Pahalgam, Zanskar',
    difficulty: 'Moderate to Hard',
    season: 'Summer (June - Sept)',
    cost: '₹15,000 - ₹25,000 / week',
    desc: 'Traverse the Great Lakes trek, or brave the frozen Zanskar river on the Chadar Trek.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Motorcycle Expeditions',
    location: 'Leh-Ladakh Routes',
    difficulty: 'Hard',
    season: 'Summer (June - Sept)',
    cost: '₹2,000 - ₹4,000 / day (rentals)',
    desc: 'Ride through the highest motorable passes like Khardung La and Chang La.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'River Rafting',
    location: 'Zanskar & Indus',
    difficulty: 'Moderate',
    season: 'Summer (July - Sept)',
    cost: '₹1,500 - ₹3,000 / trip',
    desc: 'Experience high altitude whitewater rafting among deep gorges and barren cliffs.',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80'
  }
];

const Activities = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Adventure Awaits</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Push your limits with the most thrilling adventure sports in the Himalayas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activitiesData.map((act, index) => (
          <motion.div 
            key={act.name}
            className="glass-card rounded-3xl overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={act.image} 
                alt={act.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-display font-bold text-white mb-2">{act.name}</h3>
                <p className="text-brand font-medium">{act.location}</p>
              </div>
            </div>
            
            <div className="p-6 pt-0 bg-darkBg">
              <p className="text-slate-300 mb-6">{act.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Difficulty</p>
                  <p className="font-medium text-white">{act.difficulty}</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Best Season</p>
                  <p className="font-medium text-white">{act.season}</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Est. Cost</p>
                  <p className="font-medium text-white">{act.cost}</p>
                </div>
              </div>
              
              <button className="w-full py-3 rounded-xl border border-brand text-brand hover:bg-brand hover:text-white transition-all font-medium">
                Find Providers
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
