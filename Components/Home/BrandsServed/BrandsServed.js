import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Brand from "./Brand";
import brandImg1 from "../../../public/Images/Brand/iglooLogo.png";
import brandImg2 from "../../../public/Images/Brand/pran.png";
import brandImg3 from "../../../public/Images/Brand/vmsl.png";
import brandImg4 from "../../../public/Images/Brand/beximco.png";
import brandImg5 from "../../../public/Images/Brand/bashundhara.png";
import clientsBg from "../../../public/Images/backgroundImg/ourClients.png";

const BrandsServed = () => {
  const bgStyle = {
    backgroundImage: `url(${clientsBg.src})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div className=" justify-content-center pt-5 pb-5 px-2 py-2" style={bgStyle}>
      <h2 style={{fontSize:"30px"}} className="pb-5  text-light text-center">WE SERVED</h2>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        // spaceBetween={50}
        slidesPerView={5}
        // spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1200: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <Brand data={{ img: brandImg1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Brand data={{ img: brandImg5 }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandsServed;
