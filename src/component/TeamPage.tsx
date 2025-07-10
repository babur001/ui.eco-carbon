import i18next from "i18next";
import React from "react";
import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations();

  const teamDesc = t(`team-description`);

  const keyingilar = [
    {
      img: `/logo.png`,
      role: t(`Bosh direktor`),
      fullName: `ABDUJABBAROV AZIZ ABDUSATTAROVICH`,
      desc: t(`general-director-desc`),
      isExecutive: true,
    },
    {
      img: `/logo.png`,
      role: t(`Bosh muhandis (boshqa sohalar bo'yicha)`),
      fullName: `MAMATOV ISTAM UKTAMOVICH`,
      desc: t(`chief-engineer-desc`),
      isExecutive: true,
    },
    {
      img: `/logo.png`,
      role: t(`Departament direktori`),
      fullName: `ZAXIDOV MUZAFFAR YULDASHEVICH`,
      desc: t(`department-director-desc`),
      isExecutive: true,
    },
    {
      img: `/logo.png`,
      role: t(`Departament direktori o'rinbosari: Kadr va rejim bo'limi boshlig'i`),
      fullName: `YO'LDASHEV DILSHODBEK SHUXRATBEK O'G'LI`,
      desc: t(`Xodimlar boshqaruvi, ichki tartib va rejim `),
    },
    {
      img: `/logo.png`,
      role: t(`Moliya-iqtisod va ma'muriy bo'lim boshlig'i`),
      fullName: `MIRSAIDOV MIRSAID MIRAZIZOVICH`,
      desc: t(`Moliya tahlili, budjet va ofis boshqaruvi `),
    },
    {
      img: `/logo.png`,
      role: t(`Ta'minot bo'limi boshlig'i`),
      fullName: `O'TKUROV OYBEK OTABEKOVICH`,
      desc: t(`Materiallar va texnika yetkazib berilishini ta'minlash `),
    },
    {
      img: `/logo.png`,
      role: t(`Tayyor mahsulotlar ombori mudiri`),
      fullName: `XOSHIMOV SALOXIDDIN YAXYOYEVICH`,
      desc: t(`Tayyor mahsulotlar harakati va saqlash nazorati `),
    },
    {
      img: `/logo.png`,
      role: t(`Texnika xavfsizligi bo'yicha muhandis`),
      fullName: `BIKKULOV ANVAR BORISOVICH`,
      desc: t(`Ish jarayonidagi xavfsizlik choralarini kuzatish va nazorat qilish `),
    },
    {
      img: `/logo.png`,
      role: t(`Bosh administrator`),
      fullName: `ISMATULLAYEV DAMIR RASHITOVICH`,
      desc: t(`Худудий менежерлар ишини мувофиқлаштириш`),
      //
    },
  ];

  return (
    <div id="team" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">👥 {t("Bizning Jamoa")}</h2>
        <p className="mt-1 w-full md:w-2/3 text-center text-sm md:text-base mx-auto text-gray-600">{teamDesc}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {keyingilar
          .filter((user) => user.isExecutive)
          .map((member, index) => (
            <div key={index}>
              {member.isExecutive ? (
                <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg transition-shadow duration-300">
                  <div className="md:w-3/4 md:pr-8">
                    <h3 className="font-bold text-2xl text-gray-800">{member.fullName}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{member.role}</p>
                    <p className="text-md text-gray-500 mt-4">{member.desc}</p>
                  </div>
                  <div className="md:w-1/4 mt-6 md:mt-0">
                    <img className="rounded-lg object-cover w-full h-full" src={member.img} alt="Avatar" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
      </div>

      <div className="h-[30px]" />

      <div className="grid grid-cols-4 gap-8 md:gap-10">
        {keyingilar
          .filter((user) => !user.isExecutive)
          .map((member, index) => (
            <div key={index}>
              <div key={index} className="text-center w-full">
                <img className="rounded-lg object-contain size-24 mx-auto" src={member.img} alt="Avatar" />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium text-sm text-gray-800">{member.fullName}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
