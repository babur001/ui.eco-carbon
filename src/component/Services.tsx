import { Dot } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <div id="services" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img className="w-full object-cover aspect-video  rounded-xl" src={`/people/13.jpg`} alt="Features Image" />
      </div>

      {[
        {
          title: "🛠 Xizmatlar",
          children: [
            { title: "(GTP) Gaz taqsimlash punktlari va (RD) regulyator davlenilardagi gaz sizib chiqishini aniqlash" },
            { title: "AQSHdan keltirilgan zamonaviy gaz aniqlash texnologiyalari yordamida tahlil " },
            { title: "Yevropadan olib kelingan yuqori sifatli ehtiyot qismlar bilan ta’mirlash " },
            { title: "Atrof-muhitga zararli gazlar chiqishini kamaytirish " },
          ],
        },
        {
          title: "🌍 Loyihalar va yutuqlar",
          children: [
            { title: "52.000+ ta gaz sizib chiqish holati aniqlanib, ta'mirlandi" },
            { title: "8-million tonna CO₂ ekvivalentidan ortiq emissiyaning oldi olindi" },
            { title: "BeZero Carbon reytingida “AA” baho" },
            { title: "VERRA tomonidan tasdiqlangan karbon bloklari (VCU) chiqarildi" },
            { title: "Respublikamizning deyarli barcha hududlarida faoliyat olib borilmoqda " },
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
                          {/* <p className="mt-1 text-gray-600">{block.desc}</p> */}
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
