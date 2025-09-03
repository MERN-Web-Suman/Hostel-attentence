// Footer.jsx
import React from "react";
import { toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubscribe = () => {
    toast.success("Subscribed successfully!");
  };

  return (
    <footer className="bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 text-white p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* About Section */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Hostel Manager</h2>
          <p className="text-gray-200">
            Manage your hostel attendance, mess menu, water timetable, and complaints with ease.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="/"
              className="p-3 bg-white text-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="p-3 bg-white text-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="p-3 bg-white text-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="p-3 bg-white text-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer transition-colors">Attendance</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">Mess Menu</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">Complaints</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">Timetable</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">Profile</li>
          </ul>
        </div>

        {/* Newsletter / Subscribe */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="text-gray-200 mb-4">
            Get updates about hostel notices, mess menu, and attendance reminders.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md text-gray-800 flex-1"
            />
            <button
              onClick={handleSubscribe}
              className="bg-white text-purple-700 font-bold px-4 rounded-r-md hover:bg-purple-700 hover:text-white transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-300" data-aos="fade-up" data-aos-delay="600">
        &copy; {new Date().getFullYear()} Hostel Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
