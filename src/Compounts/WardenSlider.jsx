// WardenSlider.jsx
import React from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WardenSlider = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 ,  once: false });
  }, []);

  const wardens = [
    { name: "Mr. Rajesh Kumar", photo: "https://i.pravatar.cc/150?img=1", designation: "Hostel Warden" },
    { name: "Mrs. Sunita Singh", photo: "https://i.pravatar.cc/150?img=2", designation: "Assistant Warden" },
    { name: "Mr. Anil Sharma", photo: "https://i.pravatar.cc/150?img=3", designation: "Hostel Supervisor" },
    { name: "Mrs. Pooja Verma", photo: "https://i.pravatar.cc/150?img=4", designation: "Assistant Warden" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
        Our Wardens
      </h2>
      <Slider {...settings}>
        {wardens.map((warden, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img
                src={warden.photo}
                alt={warden.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{warden.name}</h3>
              <p className="text-gray-500">{warden.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WardenSlider;
