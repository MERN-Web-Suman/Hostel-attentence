
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init();

const FeedbackPanel = () => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || rating === 0 || !comments) {
      toast.error("Please fill all fields before submitting!");
      return;
    }
    // For frontend-only, we just show success toast
    toast.success("Feedback submitted successfully!");
    // Clear form
    setCategory("");
    setRating(0);
    setComments("");
  };

  return (
    <div
      className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      data-aos="fade-up"
    >
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold mb-4 text-center">Feedback Panel</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold">Category</label>
          <select
            className="w-full p-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Mess">Mess</option>
            <option value="Hostel">Hostel Facilities</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-2 font-semibold">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl transition-transform hover:scale-125 ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div>
          <label className="block mb-2 font-semibold">Comments</label>
          <textarea
            className="w-full p-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all"
            rows="4"
            placeholder="Write your feedback..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 font-bold rounded-xl bg-white text-purple-600 hover:bg-yellow-400 hover:text-white transition-all shadow-lg"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackPanel;
