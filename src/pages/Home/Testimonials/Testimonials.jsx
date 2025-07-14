import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  // Static data (এখানে চাইলে Firebase/MongoDB থেকে data আনতে পারো)
  const reviews = [
    {
      name: "Ashik Rizvi",
      email: "ashik@gymbase.com",
      comment: "This gym is the best in town. Trainers are amazing!",
      photoURL: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Sara Smith",
      email: "sara@gymbase.com",
      comment: "Loved the atmosphere. Clean and very professional.",
      photoURL: "https://i.pravatar.cc/150?img=4"
    },
    {
      name: "John Doe",
      email: "john@gymbase.com",
      comment: "Affordable prices and very helpful staff!",
      photoURL: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Emily Ray",
      email: "emily@gymbase.com",
      comment: "The best gym in the city. Highly recommended.",
      photoURL: "https://i.pravatar.cc/150?img=6"
    }
  ];

  return (
    <section className="py-16 bg-[#222224] px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        What Our Members Say
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={review.photoURL}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-green-500 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.email}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
