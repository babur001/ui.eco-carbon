import { Dot } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img
          className="w-full object-cover aspect-video  rounded-xl"
          src="https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Features Image"
        />
      </div>

      {/* Grid */}
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800">Что мы предлагаем</h2>
          <p className="mt-2 md:mt-4 text-gray-500">
            Мы предоставляем полный комплекс сантехнических услуг — от установки до аварийного ремонта. Надежно, быстро и качественно!
          </p>
        </div>
        {/* End Col */}

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Установка сантехники", desc: "монтаж раковин, унитазов, ванн, душевых кабин и другого оборудования." },
              { title: "Ремонт и обслуживание", desc: "устранение протечек, замена труб, прочистка засоров." },
              { title: "Монтаж систем отопления", desc: "установка котлов, радиаторов и теплых полов." },
              { title: "Устранение аварийных ситуаций", desc: "экстренный выезд для решения проблем с водой или отоплением." },
              { title: "Установка и ремонт водопроводных систем", desc: "подключение водоснабжения, замена труб." },
              { title: "Монтаж канализации", desc: "подключение к центральной системе или установка автономной канализации." },
            ].map((block) => {
              return (
                <div key={block.title} className="flex gap-x-5">
                  <div className="text-blue-50 bg-primary w-5 h-5 flex items-center justify-center rounded-full">
                    <Dot />
                  </div>

                  <div className="grow">
                    <h3 className="text-lg/5 font-semibold text-gray-800">{block.title}</h3>
                    <p className="mt-1 text-gray-600">{block.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
  );
}
