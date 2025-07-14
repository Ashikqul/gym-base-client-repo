import React from 'react';
import equipmentImg from '../../../assets/Feature/equipment.jpg';
import trainerImg from '../../../assets/Feature/trainer.jpg';
import clockImg from '../../../assets/Feature/clockImg.jpg';
import rewardImg from '../../../assets/Feature/reward.jpg';

const FeaturedSection = () => {
  const features = [
    {
      image: equipmentImg,
      title: "Modern Equipment",
      description: "State-of-the-art machines and free weights to help you meet all your fitness goals.",
    },
    {
      image: trainerImg,
      title: "Expert Trainers",
      description: "Certified trainers dedicated to guiding and motivating you at every step.",
    },
    {
      image: clockImg,
      title: "24/7 Access",
      description: "Train anytime! Our gym is open round the clock to fit your busy schedule.",
    },
    {
      image: rewardImg,
      title: "Member Rewards",
      description: "Earn points, unlock exclusive perks and discounts as a loyal GymBase member.",
    },
  ];

  return (
    <section className="bg-[#28282A] py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Choose GymBase?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center"
          >
           <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-green-500 shadow-[0_0_20px_#22c55e] animate-pulse">
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-full object-cover rounded-full"
  />
</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
