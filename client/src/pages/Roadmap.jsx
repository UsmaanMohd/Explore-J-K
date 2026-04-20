import { motion } from 'framer-motion';
import { MapPin, Navigation, Mountain, Camera, Sunrise, Snowflake, Car, Tent, Map, Calendar, Wallet } from 'lucide-react';

const routeDays = [
  {
    step: "Step 1",
    title: "Katra (Starting Point)",
    desc: "Start with divine blessings at the Vaishno Devi Temple. Take the 12-13 km trek up the mountain.",
    metrics: "1-2 Days • Spiritual Hub",
    icon: <Sunrise className="w-5 h-5 text-orange-400" />,
    color: "bg-orange-500/20 border-orange-500/50 text-orange-400",
    image: "https://loremflickr.com/800/600/hindu,temple,mountain?lock=1"
  },
  {
    step: "Step 2",
    title: "Patnitop",
    desc: "Drive up the lush green mountains via NH 44. Enjoy the immense pine forests and adventure stops.",
    metrics: "Distance: ~80 km • Adventure",
    icon: <Mountain className="w-5 h-5 text-green-400" />,
    color: "bg-green-500/20 border-green-500/50 text-green-400",
    image: "https://loremflickr.com/800/600/pine,forest,snow?lock=2"
  },
  {
    step: "Step 3",
    title: "Pahalgam",
    desc: "Branching off before the main city, head to the majestic Valley of Shepherds. Explore Betaab Valley's gorgeous rivers and dense woods.",
    metrics: "Nature & Valleys",
    icon: <Tent className="w-5 h-5 text-emerald-400" />,
    color: "bg-emerald-500/20 border-emerald-500/50 text-emerald-400",
    image: "https://loremflickr.com/800/600/valley,forest,river?lock=5"
  },
  {
    step: "Step 4",
    title: "Srinagar (The Hub)",
    desc: "Arrive at the central hub of the valley. Enjoy houseboats and Shikara rides on Dal Lake.",
    metrics: "Spend 2-3 Days • Dal Lake",
    icon: <MapPin className="w-5 h-5 text-brandLight" />,
    color: "bg-brand/20 border-brand/50 text-brandLight",
    image: "https://loremflickr.com/800/600/lake,shikara,kashmir?lock=3"
  },
  {
    step: "Step 5",
    title: "Doodhpathri (Hidden Gem)",
    desc: "Take a majestic detour south to the 'Valley of Milk'. A very peaceful, green mini-Switzerland that's uncrowded.",
    metrics: "Underrated • Peaceful",
    icon: <Tent className="w-5 h-5 text-lime-400" />,
    color: "bg-lime-500/20 border-lime-500/50 text-lime-400",
    image: "https://loremflickr.com/800/600/switzerland,meadow,kashmir?lock=8"
  },
  {
    step: "Step 6",
    title: "Gulmarg & Wular Lake",
    desc: "Head North-West for epic snow and Asia's highest ski lift. On the way or nearby, visit the serene Wular Lake.",
    metrics: "Snow • Photography",
    icon: <Snowflake className="w-5 h-5 text-cyan-400" />,
    color: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400",
    image: "https://loremflickr.com/800/600/snow,ski,mountain?lock=4"
  },
  {
    step: "Step 7",
    title: "Zoji La Pass & Kargil",
    desc: "Start your epic Himalayan climb. Traverse the dramatic and rugged Zoji La Pass heading into Kargil.",
    metrics: "High Altitude Drive",
    icon: <Car className="w-5 h-5 text-indigo-400" />,
    color: "bg-indigo-500/20 border-indigo-500/50 text-indigo-400",
    image: "https://loremflickr.com/800/600/leh,ladakh,road?lock=9"
  },
  {
    step: "Step 8",
    title: "Leh",
    desc: "The ancient high-altitude desert city. A fantastic base filled with monasteries, culture, and rich history.",
    metrics: "Final Basecamp",
    icon: <Navigation className="w-5 h-5 text-red-500" />,
    color: "bg-red-500/20 border-red-500/50 text-red-500",
    image: "https://loremflickr.com/800/600/monastery,himalayas,desert?lock=10"
  },
  {
    step: "Step 9",
    title: "Pangong Lake & Tso Moriri",
    desc: "Complete the ultimate journey by visiting the mesmerizing high-altitude twin lakes showcasing unimaginable hues of blue.",
    metrics: "Final Destination",
    icon: <Camera className="w-5 h-5 text-blue-400" />,
    color: "bg-blue-500/20 border-blue-500/50 text-blue-400",
    image: "https://loremflickr.com/800/600/blue,lake,mountain,ladakh?lock=11"
  }
];

const Roadmap = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="px-4 py-2 rounded-full border border-brand/50 text-brand bg-brand/10 text-sm font-bold uppercase tracking-wider mb-6 inline-block">Visual Roadmap</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">The Great Himalayan Route</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          The ultimate 9-step mapped loop through Jammu, diving into the valleys of Kashmir, and climbing out to the rugged deserts of Ladakh.
        </p>

        {/* Visual Map Attachment */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden glass p-4 border border-brand/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <img 
              src="/roadmap-map.jpg" 
              alt="Watercolor Himalayan Map Route" 
              className="w-full h-auto rounded-2xl object-cover" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://loremflickr.com/1200/600/map,roadmap,kashmir?lock=100";
              }}
            />
        </div>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:border-none space-y-12 mt-12">
        {/* Central invisible line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 z-0" />

        {routeDays.map((stop, i) => (
          <motion.div 
            key={i} 
            className={`relative z-10 flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Center Icon */}
            <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${stop.color} bg-darkBg border-[3px] items-center justify-center backdrop-blur-md shadow-xl z-20`}>
              {stop.icon}
            </div>

            {/* Mobile Icon */}
            <div className={`md:hidden absolute -left-[25px] w-12 h-12 rounded-full ${stop.color} bg-darkBg border-[3px] flex items-center justify-center backdrop-blur-md`}>
              {stop.icon}
            </div>

            {/* Image Side */}
            <div className="w-full pl-8 md:pl-0 md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-56 rounded-2xl overflow-hidden glass-card p-2 group">
                <img 
                   src={stop.image} 
                   alt={stop.title} 
                   className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full pl-8 md:pl-0 md:w-1/2 ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${stop.color} bg-opacity-10 backdrop-blur-sm`}>
                {stop.step}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {stop.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                {stop.desc}
              </p>
              <span className="text-sm font-semibold text-brandLight bg-brand/10 px-3 py-1 rounded inline-block">
                {stop.metrics}
              </span>
            </div>

          </motion.div>
        ))}
      </div>
      
      {/* PRO TIP SECTION */}
      <motion.div 
        className="mt-20 glass p-8 rounded-3xl relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
           <Wallet className="text-amber-400" /> PRO TIP SUMMARY
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand" /> Ideal Duration</h4>
            <p className="text-slate-300">Minimum: 10–12 days</p>
            <p className="text-slate-300 font-medium">Best: 14–16 days</p>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Wallet className="w-4 h-4 text-emerald-400" /> Budget</h4>
            <p className="text-slate-300">₹15k – ₹25k (Budget Route)</p>
            <p className="text-slate-300 font-medium">₹30k – ₹60k (Comfortable)</p>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-orange-400" /> Best Time to Visit</h4>
            <p className="text-slate-300">Kashmir: April – October</p>
            <p className="text-slate-300 font-medium">Ladakh: May – September</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-4 rounded-xl bg-brand hover:bg-brandLight text-white font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Save this Route Plan
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;
