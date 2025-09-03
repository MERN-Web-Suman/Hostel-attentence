import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const HostelSelect = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    previousHostel: "",
    wardenName: "",
    hostel: "",
    hostelWarden: "",
    roomNo: "",
    bedNo: "",
    studyYear: "",
    courseName: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const hostels = [
    { name: "Hostel A", warden: "Mr. Sharma" },
    { name: "Hostel B", warden: "Mrs. Verma" },
    { name: "Hostel C", warden: "Mr. Khan" },
    { name: "Hostel D", warden: "Mr. Singh" },
    { name: "Hostel E", warden: "Mrs. Patel" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Hostel change request submitted!");
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <form
        data-aos="zoom-in"
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Hostel Change Form
        </h2>

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Previous Hostel & Warden */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="previousHostel"
            placeholder="Previous Hostel Name"
            value={formData.previousHostel}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="wardenName"
            placeholder="Previous Warden Name"
            value={formData.wardenName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Room No & Bed No */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="roomNo"
            placeholder="Room No"
            value={formData.roomNo}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="bedNo"
            placeholder="Bed No"
            value={formData.bedNo}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Study Year & Course */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="studyYear"
            placeholder="Study Year"
            value={formData.studyYear}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Hostel Selection */}
        <div>
          <p className="font-semibold mb-2">Select Hostel</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hostels.map((hostel, idx) => (
              <label
                key={idx}
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition hover:bg-indigo-50 ${
                  formData.hostel === hostel.name
                    ? "border-indigo-500 bg-indigo-100"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="hostel"
                  value={hostel.name}
                  checked={formData.hostel === hostel.name}
                  onChange={(e) => {
                    handleChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      hostelWarden: hostel.warden,
                    }));
                  }}
                  className="text-indigo-600"
                />
                <span className="flex-1">
                  {hostel.name} – Warden: {hostel.warden}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold transition hover:bg-indigo-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default HostelSelect;
