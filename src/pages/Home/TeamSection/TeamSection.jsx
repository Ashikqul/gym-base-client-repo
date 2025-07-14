import React from 'react';

const trainers = [
  {
    name: "Alex Johnson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztF5-VctouPbhiyk_3ZkFx9y5k8lgm4sPBMo4dfI4qG5j3Q9y-nmg704wrw0JyA37nnI&usqp=CAU",
    bio: "Alex is a certified strength coach with 10+ years of experience in bodybuilding and athletic training.",
    expertise: ["Strength Training", "Bodybuilding", "Rehabilitation"]
  },
  {
    name: "Maria Rodriguez",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmLlgb_Am5K_45SxRSykcmif5C_y89mRQbbLg4Kqwpy40-1AYCFegxoF47VI8cTiLIIY&usqp=CAU",
    bio: "Maria is a passionate cardio instructor who loves helping people achieve their fitness goals.",
    expertise: ["Cardio", "HIIT", "Endurance Coaching"]
  },
  {
    name: "David Kim",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5iDVAev7EJqM99D6o1n5NzJzSamnvYjcTg&s",
    bio: "David is a professional cross-training expert known for his dynamic and challenging routines.",
    expertise: ["CrossFit", "Functional Training", "Mobility"]
  }
];

const TeamSection = () => {
  return (
    <section className="bg-[#222224] py-12 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Meet Our Trainers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
            <p className="text-gray-600 text-sm mt-2 mb-4">{trainer.bio}</p>
            <div className="text-left">
              <p className="font-semibold text-gray-700 mb-1">Expertise:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {trainer.expertise.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
