
// NoticeBoard.jsx
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { PlusCircle } from "lucide-react";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Mess Menu Updated",
      description: "This week's mess menu has been updated with new dishes.",
      date: "2025-09-03",
    },
    {
      id: 2,
      title: "Water Supply Notice",
      description: "Water will not be available from 2 PM - 4 PM tomorrow.",
      date: "2025-09-04",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newNotice, setNewNotice] = useState({ title: "", description: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleAddNotice = () => {
    if (!newNotice.title || !newNotice.description) {
      toast.error("Please fill all fields!");
      return;
    }
    const notice = {
      id: Date.now(),
      title: newNotice.title,
      description: newNotice.description,
      date: new Date().toISOString().split("T")[0],
    };
    setNotices([notice, ...notices]);
    setNewNotice({ title: "", description: "" });
    setShowModal(false);
    toast.success("Notice added successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-2xl font-bold text-indigo-600"
          data-aos="fade-right"
        >
          📢 Notice Board
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300"
        >
          <PlusCircle size={18} />
          Add Notice
        </button>
      </div>

      {/* Notice List */}
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            data-aos="fade-up"
            className="p-4 rounded-xl shadow-md bg-white hover:shadow-xl border border-gray-100 transition-all duration-300 hover:bg-indigo-50"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {notice.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{notice.description}</p>
            <p className="text-xs text-gray-400 mt-2">📅 {notice.date}</p>
          </div>
        ))}
      </div>

      {/* Create Notice Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md"
            data-aos="zoom-in"
          >
            <h2 className="text-xl font-bold text-indigo-600 mb-4">
              Create New Notice
            </h2>
            <input
              type="text"
              placeholder="Notice Title"
              value={newNotice.title}
              onChange={(e) =>
                setNewNotice({ ...newNotice, title: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Notice Description"
              value={newNotice.description}
              onChange={(e) =>
                setNewNotice({ ...newNotice, description: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              rows={4}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNotice}
                className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
