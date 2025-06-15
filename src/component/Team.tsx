import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const teamDesc =
  i18next.t(`Ekocarbon Services MCHJ — o'z sohasida tajribaga ega va yuqori malakali mutaxassislar jamoasi. Har bir xodimimiz kompaniya faoliyatining muhim
          yo'nalishiga mas'ul bo'lib, barqaror rivojlanishimizga hissa qo'shmoqda.`);

const keyingilar = [
  {
    img: `/logo.png`,
    role: i18next.t(`Bosh direktor`),
    fullName: `ABDUJABBAROV AZIZ ABDUSATTAROVICH`,
    desc: i18next.t(`Umumiy boshqaruv va strategik qarorlar`),
    //
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Bosh muhandis (boshqa sohalar bo'yicha)`),
    fullName: `MAMATOV ISTAM UKTAMOVICH`,
    desc: i18next.t(`Texnik tizimlar va loyiha muvofiqligi`),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Departament direktori`),
    fullName: `ZAXIDOV MUZAFFAR YULDASHEVICH`,
    desc: i18next.t(`Ichki bo'limlar va loyiha yuritish jarayonlarini boshqarish `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Departament direktori o'rinbosari: Kadr va rejim bo'limi boshlig'i`),
    fullName: `YO'LDASHEV DILSHODBEK SHUXRATBEK O'G'LI`,
    desc: i18next.t(`Xodimlar boshqaruvi, ichki tartib va rejim `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Moliya-iqtisod va ma'muriy bo'lim boshlig'i`),
    fullName: `MIRSAIDOV MIRSAID MIRAZIZOVICH`,
    desc: i18next.t(`Moliya tahlili, budjet va ofis boshqaruvi `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Ta'minot bo'limi boshlig'i`),
    fullName: `O'TKUROV OYBEK OTABEKOVICH`,
    desc: i18next.t(`Materiallar va texnika yetkazib berilishini ta'minlash `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Tayyor mahsulotlar ombori mudiri`),
    fullName: `XOSHIMOV SALOXIDDIN YAXYOYEVICH`,
    desc: i18next.t(`Tayyor mahsulotlar harakati va saqlash nazorati `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Texnika xavfsizligi bo'yicha muhandis`),
    fullName: `BIKKULOV ANVAR BORISOVICH`,
    desc: i18next.t(`Ish jarayonidagi xavfsizlik choralarini kuzatish va nazorat qilish `),
  },
  {
    img: `/logo.png`,
    role: i18next.t(`Bosh administrator`),
    fullName: `ISMATULLAYEV DAMIR RASHITOVICH`,
    desc: i18next.t(`Худудий менежерлар ишини мувофиқлаштириш`),
    //
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <div id="team" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">👥 {t("Bizning Jamoa")}</h2>
        <p className="mt-1 w-full md:w-2/3 text-center text-sm md:text-base mx-auto text-gray-600">{teamDesc}</p>
      </div>

      <div className="flex items-start flex-wrap justify-center gap-8 md:gap-10">
        {keyingilar.map((member, index) => (
          <div key={index} className="text-center w-full md:w-2/12">
            <img className="rounded-lg object-contain size-24 mx-auto" src={member.img} alt="Avatar" />
            <div className="mt-2 sm:mt-4">
              <h3 className="font-medium text-sm text-gray-800">{member.fullName}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-xs text-gray-500 mt-1">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
