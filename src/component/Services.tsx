import { Dot } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div id="services" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img className="w-full object-cover aspect-video  rounded-xl" src={`/people/13.jpg`} alt="Features Image" />
      </div>

      {[
        {
          title: t("🛠 Xizmatlar"),
          children: [
            { title: t("(GTP) Gaz taqsimlash punktlari va (RD) regulyator davlenilardagi gaz sizib chiqishini aniqlash") },
            { title: t("AQSHdan keltirilgan zamonaviy gaz aniqlash texnologiyalari yordamida tahlil ") },
            { title: t("Yevropadan olib kelingan yuqori sifatli ehtiyot qismlar bilan ta’mirlash ") },
            { title: t("Atrof-muhitga zararli gazlar chiqishini kamaytirish ") },
          ],
        },
        {
          title: t("🌍 Loyihalar va yutuqlar"),
          children: [
            { title: t("52.000+ ta gaz sizib chiqish holati aniqlanib, ta'mirlandi") },
            { title: t("8-million tonna CO₂ ekvivalentidan ortiq emissiyaning oldi olindi") },
            { title: t("BeZero Carbon reytingida “AA” baho") },
            { title: t("VERRA tomonidan tasdiqlangan karbon bloklari (VCU) chiqarildi") },
            { title: t("Respublikamizning deyarli barcha hududlarida faoliyat olib borilmoqda ") },
          ],
        },
      ].map((block) => {
        return (
          <>
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-5">
              <div className="lg:col-span-1">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800">{block.title}</h2>
              </div>

              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-5">
                  {block.children.map((block) => {
                    return (
                      <div key={block.title} className="flex gap-x-5">
                        <div className="text-blue-50 bg-primary w-5 h-5 flex items-center justify-center rounded-full">
                          <Dot />
                        </div>

                        <div className="grow">
                          <h3 className="text-base/5 text-gray-800">{block.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
