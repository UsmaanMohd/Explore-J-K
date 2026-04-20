import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, Compass } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (e) => {
    e.preventDefault();
    // Persist login state
    localStorage.setItem('explore_jk_user', 'true');
    // Force a full refresh to update Navbar seamlessly
    window.location.href = '/';
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 blur-[120px] rounded-full z-0 mix-blend-screen pointer-events-none" />

      <motion.div 
        className="glass-card w-full max-w-md p-8 rounded-3xl relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-8">
          <Compass className="w-12 h-12 text-brand mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Join the Adventure'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isLogin ? 'Sign in to access your saved itineraries.' : 'Create an account to save places and plan trips.'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm text-slate-400 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-brand"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm text-slate-400 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-brand"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-brand"
              />
            </div>
          </div>

          {isLogin && <div className="text-right"><a href="#" className="text-sm text-brand hover:underline">Forgot password?</a></div>}

          <button type="submit" className="w-full py-3 mt-4 rounded-xl bg-brand hover:bg-brandLight text-white font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-white hover:text-brand font-medium">
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
