import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Places from './pages/Places.jsx';
import PlaceDetails from './pages/PlaceDetails.jsx';
import Regions from './pages/Regions.jsx';
import Activities from './pages/Activities.jsx';
import Auth from './pages/Auth.jsx';
import Roadmap from './pages/Roadmap.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-darkBg text-slate-100">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<PlaceDetails />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        
        {/* Simple Footer directly in App for now */}
        <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
          <p>© 2026 Explore Jammu & Kashmir. Made for travelers.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
