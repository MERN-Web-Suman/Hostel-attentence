// Dashboard.jsx
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { Edit, Save } from "lucide-react";

export default function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      {/* Single row for all cards */}
      <div className="flex flex-col md:flex-row gap-6">
        <DashboardProfileCard />
        <AttendanceCard />
        <MessMenuCard />
        <ComplaintsCard />
      </div>
    </div>
  );
}

// ----------------------
// Profile Card
function DashboardProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Suman Kumar",
    studentId: "CSE2025-101",
    room: "B-204",
    preference: "Veg",
    emergencyContact: "+91 9876543210",
  });
  const [formData, setFormData] = useState({ ...profile });

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
    toast.success("Preferences updated!");
  };

  return (
    <div
      data-aos="fade-up"
      className="flex-1 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition"
    >
      <h2 className="text-2xl font-bold mb-1">Profile</h2>
      <p className="text-sm text-purple-200 mb-4">Manage your preferences</p>

      {!isEditing ? (
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {profile.name}</p>
          <p><span className="font-semibold">ID:</span> {profile.studentId}</p>
          <p><span className="font-semibold">Room:</span> {profile.room}</p>
          <p><span className="font-semibold">Preference:</span> {profile.preference}</p>
          <p><span className="font-semibold">Emergency:</span> {profile.emergencyContact}</p>
        </div>
      ) : (
        <form className="space-y-3">
          <div>
            <label className="text-purple-100 font-semibold mb-1 block">Food Preference</label>
            <select
              value={formData.preference}
              onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
              className="w-full p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div>
            <label className="text-purple-100 font-semibold mb-1 block">Emergency Contact</label>
            <input
              type="text"
              value={formData.emergencyContact}
              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
              className="w-full p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>
        </form>
      )}

      <div className="flex justify-end mt-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center bg-white text-purple-700 px-4 py-2 rounded-xl shadow-md hover:bg-purple-100 transition"
          >
            <Edit className="w-4 h-4 mr-2" /> Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            <Save className="w-4 h-4 mr-2" /> Save
          </button>
        )}
      </div>
    </div>
  );
}

// ----------------------
// Attendance Card
function AttendanceCard() {
  const [status, setStatus] = useState("Not Marked");
  const markAttendance = () => {
    setStatus("Present");
    toast.success("Attendance marked!");
  };
  return (
    <div
      data-aos="fade-up"
      className="flex-1 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition"
    >
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>
      <p className="mb-4">Today's Status: <span className="font-semibold">{status}</span></p>
      <button
        onClick={markAttendance}
        disabled={status === "Present"}
        className="bg-white text-green-700 px-4 py-2 rounded-xl shadow-md hover:bg-green-100 transition disabled:opacity-50"
      >
        Mark Present
      </button>
    </div>
  );
}

// ----------------------
// Mess Menu Card
function MessMenuCard() {
  const [preference, setPreference] = useState("Veg");
  return (
    <div
      data-aos="fade-up"
      className="flex-1 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition"
    >
      <h2 className="text-2xl font-bold mb-4">Mess Menu</h2>
      <p className="mb-4">Preference: <span className="font-semibold">{preference}</span></p>
      <div className="flex space-x-3">
        <button
          onClick={() => setPreference("Veg")}
          className="bg-white text-yellow-600 px-3 py-1 rounded-lg shadow hover:bg-yellow-100 transition"
        >
          Veg
        </button>
        <button
          onClick={() => setPreference("Non-Veg")}
          className="bg-white text-yellow-600 px-3 py-1 rounded-lg shadow hover:bg-yellow-100 transition"
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
}

// ----------------------
// Complaints Card
function ComplaintsCard() {
  const [complaint, setComplaint] = useState("");
  const submitComplaint = () => {
    if (!complaint) return toast.error("Please enter a complaint!");
    toast.success("Complaint submitted!");
    setComplaint("");
  };
  return (
    <div
      data-aos="fade-up"
      className="flex-1 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition"
    >
      <h2 className="text-2xl font-bold mb-4">Complaints</h2>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Enter your complaint..."
        className="w-full p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-300 transition mb-3"
      />
      <button
        onClick={submitComplaint}
        className="bg-white text-red-600 px-4 py-2 rounded-xl shadow-md hover:bg-red-100 transition"
      >
        Submit
      </button>
    </div>
  );
}
