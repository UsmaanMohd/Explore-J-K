import { Link } from 'react-router-dom';
import { Compass, Map, Activity, User, Menu, LogOut, Route as RouteIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    // Check if logged in
    if(localStorage.getItem('explore_jk_user')) {
      setIsUser(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('explore_jk_user');
    window.location.href = '/';
  }

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="h-8 w-8 text-brand group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Explore<span className="text-brand">J&K</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/places" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <Map className="w-4 h-4" /> Destinations
            </Link>
            <Link to="/regions" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <Compass className="w-4 h-4" /> Regions
            </Link>
            <Link to="/activities" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <Activity className="w-4 h-4" /> Adventure
            </Link>
            <Link to="/roadmap" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <RouteIcon className="w-4 h-4" /> Roadmap
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!isUser ? (
              <>
                <Link to="/auth" className="px-6 py-2 rounded-full border border-slate-600 hover:border-slate-400 hover:bg-slate-800 transition-all font-medium text-sm">
                  Log In
                </Link>
                <Link to="/auth" className="px-6 py-2 rounded-full bg-brand hover:bg-brandLight text-white transition-all font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-brand font-medium">
                  <User className="w-4 h-4 text-white" /> Welcome!
                </div>
                <button onClick={handleLogout} className="px-4 py-2 flex items-center gap-2 rounded-full border border-red-500/50 hover:bg-red-500/10 text-red-400 transition-all text-sm font-medium">
                  <LogOut className="w-4 h-4" /> Log out
                </button>
              </>
            )}
          </div>

          <button className="md:hidden text-slate-300">
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
