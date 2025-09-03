// AttendanceSummary.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const AttendanceSummary = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Mock data
  const stats = [
    { title: "Present Today", value: 120, color: "bg-green-500" },
    { title: "Expected Students", value: 150, color: "bg-blue-500" },
    { title: "Veg Count", value: 80, color: "bg-emerald-500" },
    { title: "Non-Veg Count", value: 40, color: "bg-red-500" },
  ];

  const chartData = [
    { name: "Veg", value: 80, color: "#10B981" },
    { name: "Non-Veg", value: 40, color: "#EF4444" },
  ];

  // Weekly attendance data
  const weeklyData = [
    { day: "Mon", Present: 110, Expected: 150 },
    { day: "Tue", Present: 120, Expected: 150 },
    { day: "Wed", Present: 130, Expected: 150 },
    { day: "Thu", Present: 125, Expected: 150 },
    { day: "Fri", Present: 140, Expected: 150 },
    { day: "Sat", Present: 115, Expected: 150 },
    { day: "Sun", Present: 100, Expected: 150 },
  ];

  const handleCardClick = (title) => {
    toast.success(`${title} clicked!`, { duration: 2000 });
  };

  return (
    <div className="w-full p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      <h2
        data-aos="fade-down"
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center"
      >
        Attendance Summary
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            onClick={() => handleCardClick(item.title)}
            className={`cursor-pointer rounded-2xl shadow-md p-5 text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105 ${item.color}`}
          >
            <span className="text-3xl font-bold">{item.value}</span>
            <span className="mt-2 text-base">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Pie Chart Section */}
      <div
        data-aos="fade-up"
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Veg vs Non-Veg Distribution
        </h3>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Attendance Trend */}
      <div
        data-aos="fade-up"
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Weekly Attendance Trend
        </h3>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Present"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Expected"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
