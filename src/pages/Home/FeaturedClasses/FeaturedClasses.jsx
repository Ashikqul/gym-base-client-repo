import React from "react";

const FeaturedClasses = () => {
  const classes = [
    {
      _id: "1",
      title: "Yoga for Beginners",
      description: "Start your fitness journey with gentle yoga sessions that improve flexibility and reduce stress.",
      bookingCount: 42,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97yuGNyekBdrY6yrqXziuVRR-8ZoFoieFXQ&s",
    },
    {
      _id: "2",
      title: "HIIT Fat Burn",
      description: "Burn calories fast with high-intensity workouts designed to boost metabolism and endurance.",
      bookingCount: 58,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPEL3SW7M4g-LLHQDYgMRH2nZ2tf1anQoAw&s",
    },
    {
      _id: "3",
      title: "Strength Training",
      description: "Build muscle and strength through guided resistance training with expert instructors.",
      bookingCount: 34,
      image: "https://hips.hearstapps.com/hmg-prod/images/athlete-training-with-dumbbells-in-gym-screaming-royalty-free-image-722227993-1555718957.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        💪 Featured Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map(({ _id, title, description, bookingCount, image }) => (
          <div
            key={_id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-semibold">
                  {bookingCount}+ Bookings
                </span>
                <button className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-black transition">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedClasses;
