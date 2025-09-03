
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bell, User, LogOut, Menu, X } from "lucide-react";

export default function Header({ userName = "Student", notificationsCount = 3 }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      className="w-full shadow-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* App Title */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform">
          🏫 College Hostel
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Notifications */}
          <div className="relative cursor-pointer hover:text-yellow-300 transition-colors">
            <Bell className="w-6 h-6" />
            {notificationsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full shadow">
                {notificationsCount}
              </span>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="font-medium">{userName}</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn"
                data-aos="zoom-in"
              >
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover:text-yellow-300 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-white text-gray-800 shadow-lg rounded-b-2xl animate-slideDown"
          data-aos="zoom-in"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* Notifications */}
            <button className="relative flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Bell className="w-5 h-5" />
              Notifications
              {notificationsCount > 0 && (
                <span className="absolute left-28 top-1 bg-red-500 text-xs px-1.5 py-0.5 rounded-full shadow text-white">
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <User className="w-5 h-5" /> {userName}
            </button>

            {/* Logout */}
            <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
