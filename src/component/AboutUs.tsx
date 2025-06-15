import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import i18next from "i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const aboutUsList = [
  {
    title:
      i18next.t(`Kompaniya 2021 yil tashkil topgan bolib 2023 yildan Hududgaztaminot bilan ekologik proekt ustida ishlamoqda. 2023 mart oyida Amerikaning Climate Compas LLS va Gas Green Asia MCHJ bilan investitsion shartnomlar tuzilib. Toshkent shahri va viloyatida exprement tariqasida ish boshlash uchun kelishuvga erishildi. 2023 yil iyun oyidan Toshkent shahri va viloyatida, sentyabr oyidan boshqa viloyatlarda ish tashkil etildi. Ish jaroyani shundan iboratki xodimlar (GTP) gaz taqsimlash punktlari va (RD) regulyator davlenilardan sizib chiqyotgan korbanad angidrid gazlarini maxsus AQSH dan keltirilgan uskunalar yordamida tekshirilib tamirilash ishlari bajariladi. "EkoCarbon Services" va "Climate Compass" boshchiligidagi ilg'or gaz sizib chiqishlarni aniqlash va ta'mirlash dasturi O'zbekistonning gaz taqsimlash tizimidagi 52 000 dan ortiq alohida gaz sizib chiqish xolatlarni topdi va ta'mirladi,
bu esa yiliga deyarli 8-million CO₂ emissiyasini oldini oladi.`),
  },
  {
    title:
      i18next.t(`"Ekocarbon Services" MCHJ – 2021 yilda tashkil topgan bo‘lib, 2023 yildan boshlab “Hududgaztaminot” bilan hamkorlikda O‘zbekiston gaz taqsimlash tizimida ekologik loyiha ustida ishlamoqda.
2023 yil mart oyida kompaniya AQSHning "Climate Compass" LLC va "Gas Green Asia" MCHJ bilan investitsion shartnomalar tuzib, Toshkent shahri va viloyatida eksperimental loyihalarni boshladi. 2023 yil iyunidan boshlab Toshkent shahri va viloyatida ,sentyabrdan  loyiha boshqa viloyatlarda ham joriy etildi.`),
  },
  {
    title: i18next.t(
      `Kompaniyamiz “Climate Compass” boshchiligida O‘zbekistonda gaz sizib chiqishini aniqlash va tuzatishga qaratilgan ilg‘or dasturlarni amalga oshirmoqda. Shu vaqtgacha 52 000 dan ortiq gaz sizib chiqish holatlari aniqlanib, muvaffaqiyatli ta’mirlandi — bu yiliga 8 million tonnagacha CO₂ ekvivalentiga teng emissiyaning oldini olish imkonini berdi.`
    ),
  },
];

const title = i18next.t("Biz haqimizda");

export default function AboutUs() {
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
