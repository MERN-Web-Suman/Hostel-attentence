
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init();

const ContactWardenForm = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [hostel, setHostel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !description || !hostel) {
      toast.error("Please fill all fields before submitting!");
      return;
    }
    toast.success("Message sent to your warden!");
    // Clear form
    setSubject("");
    setDescription("");
    setHostel("");
  };

  return (
    <div
      className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      data-aos="fade-up"
    >
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Your Warden</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Hostel Selector */}
        <div>
          <label className="block mb-2 font-semibold">Hostel</label>
          <select
            className="w-full p-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
          >
            <option value="">Select Your Hostel</option>
            <option value="Hostel A">Hostel A</option>
            <option value="Hostel B">Hostel B</option>
            <option value="Hostel C">Hostel C</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 font-semibold">Subject</label>
          <input
            type="text"
            className="w-full p-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            className="w-full p-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all"
            rows="4"
            placeholder="Write your message..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 font-bold rounded-xl bg-white text-purple-600 hover:bg-yellow-400 hover:text-white transition-all shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactWardenForm;
