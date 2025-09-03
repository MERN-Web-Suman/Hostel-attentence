import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

// Reusable Modal Component
const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div
      data-aos="zoom-in"
      className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[95%] sm:w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
      >
        ✕
      </button>
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">{title}</h2>
      {children}
    </div>
  </div>
);

export default function Dashboard() {
  const [modal, setModal] = useState(null);
  const [weeklyAttendance, setWeeklyAttendance] = useState({});
  const [vegPref, setVegPref] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Mess Menu (dummy data for 7 days)
  const messMenu = {
    Monday: { breakfast: "Idli & Sambar", lunch: "Rice & Dal", dinner: "Paneer Curry" },
    Tuesday: { breakfast: "Paratha & Curd", lunch: "Veg Biryani", dinner: "Chicken Curry" },
    Wednesday: { breakfast: "Poha", lunch: "Rajma Chawal", dinner: "Fish Curry" },
    Thursday: { breakfast: "Upma", lunch: "Chole Bhature", dinner: "Dal Tadka" },
    Friday: { breakfast: "Bread & Jam", lunch: "Veg Pulao", dinner: "Egg Curry" },
    Saturday: { breakfast: "Dosa", lunch: "Fried Rice", dinner: "Mutton Curry" },
    Sunday: { breakfast: "Puri Bhaji", lunch: "Special Thali", dinner: "Ice Cream & Veg Curry" },
  };

  // Water Timetable (3 times/day)
  const waterTimes = ["6:00 AM - 8:00 AM", "12:00 PM - 1:00 PM", "7:00 PM - 9:00 PM"];

  // Weekly Attendance save
  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    toast.success("Weekly Attendance Submitted ✅");
    setModal(null);
  };

  // Veg Preference save
  const handleVegPrefSubmit = (e) => {
    e.preventDefault();
    toast.success(`Preference Saved: ${vegPref} ✅`);
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-6 flex flex-col items-center">
      <Toaster position="top-right" />

      <h1
        data-aos="fade-down"
        className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6 sm:mb-8"
      >
        Hostel Dashboard
      </h1>

      {/* Dashboard Cards - 3 top, 3 bottom */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl">
        {[
          { name: "Attendance", color: "from-green-400 to-green-600" },
          { name: "Mess Menu", color: "from-yellow-400 to-orange-500" },
          { name: "Water Timetable", color: "from-blue-400 to-indigo-500" },
          { name: "Complaints", color: "from-red-400 to-pink-500" },
          { name: "Hostel Timings", color: "from-purple-400 to-violet-600" },
          { name: "Veg/Non-Veg Preference", color: "from-teal-400 to-cyan-500" },
        ].map((card, idx) => (
          <div
            key={idx}
            data-aos="flip-left"
            className={`bg-gradient-to-r ${card.color} rounded-2xl shadow-xl p-10 text-center cursor-pointer transform hover:scale-105 transition duration-300`}
            onClick={() => setModal(card.name)}
          >
            <h2 className="text-white text-lg sm:text-xl font-semibold">
              {card.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Attendance Modal */}
      {modal === "Attendance" && (
        <Modal title="Weekly Attendance" onClose={() => setModal(null)}>
          <form onSubmit={handleAttendanceSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={weeklyAttendance[day] || false}
                    onChange={(e) =>
                      setWeeklyAttendance((prev) => ({
                        ...prev,
                        [day]: e.target.checked,
                      }))
                    }
                  />
                  {day}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
            >
              Save Attendance
            </button>
          </form>
        </Modal>
      )}

      {/* Mess Menu Modal */}
      {modal === "Mess Menu" && (
        <Modal title="7-Day Mess Menu" onClose={() => setModal(null)}>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Day</th>
                  <th className="p-2 border">Breakfast</th>
                  <th className="p-2 border">Lunch</th>
                  <th className="p-2 border">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(messMenu).map(([day, meals]) => (
                  <tr key={day} className="hover:bg-gray-50">
                    <td className="p-2 border font-semibold">{day}</td>
                    <td className="p-2 border">{meals.breakfast}</td>
                    <td className="p-2 border">{meals.lunch}</td>
                    <td className="p-2 border">{meals.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}

      {/* Water Timetable Modal */}
      {modal === "Water Timetable" && (
        <Modal title="Water Supply Timetable" onClose={() => setModal(null)}>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            {waterTimes.map((time, idx) => (
              <li key={idx} className="text-gray-700">{time}</li>
            ))}
          </ul>
        </Modal>
      )}

      {/* Complaints Modal */}
      {modal === "Complaints" && (
        <Modal title="Submit Complaint" onClose={() => setModal(null)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Complaint Submitted ✅");
              setModal(null);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Complaint Title"
              className="w-full border rounded-lg p-2 text-sm sm:text-base"
            />
            <textarea
              placeholder="Describe your issue..."
              className="w-full border rounded-lg p-2 text-sm sm:text-base"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}

      {/* Hostel Timings Modal */}
      {modal === "Hostel Timings" && (
        <Modal title="Hostel Timings" onClose={() => setModal(null)}>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            <strong>Morning Open:</strong> 6:00 AM
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Night Close:</strong> 10:00 PM
          </p>
        </Modal>
      )}

      {/* Veg/Non-Veg Preference Modal */}
      {modal === "Veg/Non-Veg Preference" && (
        <Modal title="Veg/Non-Veg Preference" onClose={() => setModal(null)}>
          <form onSubmit={handleVegPrefSubmit} className="space-y-4">
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="preference"
                  value="Veg"
                  checked={vegPref === "Veg"}
                  onChange={(e) => setVegPref(e.target.value)}
                />
                Veg
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="preference"
                  value="Non-Veg"
                  checked={vegPref === "Non-Veg"}
                  onChange={(e) => setVegPref(e.target.value)}
                />
                Non-Veg
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-600 transition"
            >
              Save Preference
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
