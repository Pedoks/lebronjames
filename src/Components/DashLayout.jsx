import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight, 
  Menu, 
  LayoutDashboard, 
  Users, 
  BarChart,
  Trophy,
  LogOut 
} from 'lucide-react';
import lakersLogo from '../assets/lakerslogo.png';

function DashLayout() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => navigate('/login');

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'LeBron Dashboard';
      case '/dashboard/users':
        return 'Lakers Nation';
      case '/dashboard/reports':
        return 'King\'s Reports';
      default:
        return 'Lakers Dashboard';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f8f4ff] to-[#e8e0ff]">
      {/* Sidebar */}
      <div 
        className={`${
          open ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-[#552583] to-[#3a1c6b] text-white transition-all duration-300 border-r-4 border-[#FDB927] relative`}
      >
        {/* Toggle Button */}
        <button
          className="absolute -right-3 top-9 bg-[#FDB927] text-[#552583] p-1 rounded-full border-4 border-[#552583]"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>

        {/* Logo */}
        <div className="flex items-center p-4 gap-3">
          <img 
            src={lakersLogo} 
            alt="Lakers Logo" 
            className={`w-12 h-12 transition-all duration-300 ${!open && 'mx-auto'}`}
          />
          {open && (
            <span className="text-2xl font-bold text-[#FDB927]">
              KING'S HUB
            </span>
          )}
        </div>

        {/* Menu */}
        <div className="mt-10 p-2">
          <Link 
            to="/dashboard" 
            className={`flex items-center p-3 mb-2 rounded-lg transition-all ${
              location.pathname === '/dashboard' 
                ? 'bg-[#FDB927] text-[#552583] font-bold shadow-lg' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <LayoutDashboard size={20} />
            {open && <span className="ml-3">Dashboard</span>}
          </Link>

          <Link 
            to="/dashboard/reports" 
            className={`flex items-center p-3 mb-2 rounded-lg transition-all ${
              location.pathname === '/dashboard/reports' 
                ? 'bg-[#FDB927] text-[#552583] font-bold shadow-lg' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <BarChart size={20} />
            {open && <span className="ml-3">Reports</span>}
          </Link>

          <Link 
            to="/dashboard/users" 
            className={`flex items-center p-3 mb-2 rounded-lg transition-all ${
              location.pathname === '/dashboard/users' 
                ? 'bg-[#FDB927] text-[#552583] font-bold shadow-lg' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <Users size={20} />
            {open && <span className="ml-3">Lakers Nation</span>}
          </Link>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-4">
          <button 
            onClick={handleLogout}
            className="flex items-center p-3 rounded-lg w-full bg-[#FDB927] text-[#552583] font-bold hover:bg-[#ffd343] transition-all shadow-lg"
          >
            <LogOut size={20} />
            {open && <span className="ml-3">Sign Out</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#552583] to-[#3a1c6b] border-b-4 border-[#FDB927] shadow-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Menu 
                size={24} 
                className="text-[#FDB927] mr-4 cursor-pointer md:hidden" 
                onClick={() => setOpen(!open)}
              />
              <h1 className="text-2xl font-bold text-[#FDB927]">
                {pageTitle}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Trophy size={24} className="text-[#FDB927]" />
              <span className="text-white font-bold hidden md:block">The King's Dashboard</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashLayout;