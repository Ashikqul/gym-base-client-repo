import { useState } from "react";
import { Link } from "react-router";
import image from '../../../assets/banner/3.png';

const FatBurningSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="bg-[#28282A] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
      {/* Video Section */}
      <div className="w-full md:w-1/2 relative">
        {!playVideo ? (
          <>
            <img
              src={image}
              alt="Workout Preview"
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={() => setPlayVideo(true)}
                className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition"
              >
                ▶
              </button>
            </div>
          </>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/mpL7e0_jLXQ?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Explore Our Top Fat Burning Classes</h2>
        <p className="text-gray-300 mb-6">
          Body Attack is a high-energy fitness class with moves that cater for total beginners to total addicts.
          We combine athletic movements like running, lunging and jumping with strength exercises.
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <Link to="/body-attack" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Body Attack
          </Link>
          <Link to="/cross-training" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
            CrossTraining
          </Link>
          <Link to="/cardio-training" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
            CardioTraining
          </Link>
        </div>

        {/* Bar Chart */}
        <div className="flex gap-6">
          {[
            { label: 'Strength', value: 145 },
            { label: 'Cardio', value: 220 },
            { label: 'Fatburning', value: 190 }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div
                className="w-12 bg-green-500 rounded"
                style={{ height: `${item.value}px` }}
              ></div>
              <p className="mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FatBurningSection;
