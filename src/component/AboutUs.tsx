import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import i18next from "i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations();
  const aboutUsList = [
    {
      title: t(`about-us-1`),
    },
    {
      title: t(`about-us-2`),
    },
    {
      title: t(`about-us-3`),
    },
  ];

  const title = t("Biz haqimizda");

  return (
    <div id="aboutUs" className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <h3 className="text-4xl font-bold text-center py-12">{title}:</h3>

      <div className="lg:grid lg:grid-cols-12 lg:gap-5 lg:items-center">
        <div className="lg:col-span-6">
          <SliderImages />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6">
          <ul className="space-y-2 sm:space-y-4">
            {aboutUsList.map((pro) => {
              return (
                <li key={pro.title} className="flex gap-x-3">
                  <span className="mt-0.5 p-1 size-5 flex justify-center items-center rounded-full bg-primary text-blue-50">
                    <Check />
                  </span>

                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500">{pro.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const SliderImages = () => {
  const items = new Array(13).fill(0).map((_, index) => `/people/${index + 1}.jpg`);

  return (
    <div>
      <Swiper
        autoplay={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        className="max-h-[700px] aspect-square rounded-xl overflow-hidden"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="rounded-xl overflow-hidden">
            <img src={item} className="w-full aspect-square object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
