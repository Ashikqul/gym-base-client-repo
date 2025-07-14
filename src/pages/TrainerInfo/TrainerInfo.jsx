import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const TrainerInfo = () => {
  const { trainerId } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    fetch("/trainers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === trainerId);
        setTrainer(found);
      });
  }, [trainerId]);

  const handleSlotClick = (slot) => {
    navigate(`/booking/${trainerId}?slot=${encodeURIComponent(slot)}`);
  };

  if (!trainer) {
    return (
      <p className="text-center mt-10 text-gray-400">
        Trainer not found or loading...
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#28282A] rounded-lg shadow-md mt-10 text-white space-y-10">
      
      {/* Trainer Info */}
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-48 h-48 rounded-full border-4 border-green-500 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{trainer.name}</h1>
          <p className="text-gray-300 mb-4">{trainer.bio}</p>
          <h3 className="font-semibold mb-1 text-white">Expertise:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {trainer.expertise.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Available Slots */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Slots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trainer.slots && trainer.slots.length > 0 ? (
            trainer.slots.map((slot, i) => (
              <div
                key={i}
                className="p-4 bg-[#1f1f1f] rounded shadow text-white flex flex-col items-start"
              >
                <p className="text-lg font-semibold mb-2">{slot}</p>
                <button
                  onClick={() => handleSlotClick(slot)}
                  className="px-4 py-2 bg-[#409915] hover:bg-black rounded text-white transition w-full text-center"
                >
                  Book Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No slots available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;
