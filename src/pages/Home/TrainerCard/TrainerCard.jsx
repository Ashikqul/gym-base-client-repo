import React from "react";
import { useNavigate } from "react-router"; // ✅ Corrected here

const TrainerCard = ({ trainer }) => {
  const navigate = useNavigate();

  if (!trainer) return null;

  const handleViewDetails = () => {
    navigate(`/trainer/${trainer.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-500"
      />
      <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
      <p className="text-gray-600 text-sm mt-2 mb-4">{trainer.bio}</p>

      <button
        onClick={handleViewDetails}
        className="mt-4 px-4 py-2 bg-[#409915] text-white rounded hover:bg-black transition"
      >
        View Details
      </button>
    </div>
  );
};

export default TrainerCard;
