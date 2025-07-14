import { useEffect, useState } from "react";
import TrainerCard from "../../pages/Home/TrainerCard/TrainerCard";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("/trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((err) => console.error("Failed to fetch trainers:", err));
  }, []);

  return (
    <div className="py-12 px-6 md:px-20 bg-[#222224] min-h-screen">
      <h2 className="text-3xl text-white font-bold text-center mb-10">All Trainers</h2>
      {trainers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainers
            .filter((trainer) => trainer && trainer.name)
            .map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading trainers...</p>
      )}
    </div>
  );
};

export default AllTrainers;
