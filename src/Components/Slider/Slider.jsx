import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {/* hero */}
<SwiperSlide>

  <div className="relative">
    <img
      src="https://i.ibb.co.com/GfQRrzM5/hero-banner.jpg"
      className="w-full h-[500px] object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
      <h2 className="text-5xl font-bold">Programming Hero</h2>
      <p className="mt-4 text-lg">Learn Programming Through Interactive Lessons</p>
      <button className="btn btn-primary mt-6">Explore Now</button>
    </div>
  </div>
</SwiperSlide>
{/* duio */}
<SwiperSlide>
  <div className="relative">
    <img
      src="https://i.ibb.co.com/GfqRZb91/duolingo-banner.png"
      className="w-full h-[500px] object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
      <h2 className="text-5xl font-bold">Duolingo</h2>
      <p className="mt-4 text-lg">Learn Duolingo Through Interactive Lessons</p>
      <button className="btn btn-primary mt-6">Explore Now</button>
    </div>
  </div>
</SwiperSlide>
{/* Todoist */}
<SwiperSlide>
  <div className="relative">
    <img
      src="https://i.ibb.co.com/HDC5xNHg/todo.png"
      className="w-full h-[500px] object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
      <h2 className="text-5xl font-bold">Todoist</h2>
      <p className="mt-4 text-lg">Learn Todoist Through Interactive Lessons</p>
      <button className="btn btn-primary mt-6">Explore Now</button>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
  );
};

export default Slider;