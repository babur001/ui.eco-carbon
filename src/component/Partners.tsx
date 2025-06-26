import { useTranslations } from "next-intl";

const partners = [
  {
    isGlobal: true,
    title: "Climate Compass LLC (AQSH)",
    imgUrl: "/partners/climate-compass.jpg",
  },
  {
    isGlobal: true,
    title: "Gas Green Asia MCHJ",
    //
  },
  {
    isGlobal: true,
    title: "Eco Carbon Projects LTD UK",
    //
  },
  { isGlobal: true, title: "BeZero Carbon LTD", imgUrl: "/partners/beZero.jpeg" },
  { isGlobal: true, title: "EcoEye LTD", imgUrl: "/partners/ecoeye.jpeg" },
  { isGlobal: true, title: "VERRA", imgUrl: "/partners/verra.jpeg" },
  {
    isGlobal: false,
    title: "Hududgaztaminot AJ",
    imgUrl: "/partners/hududgaz.jpg",
  },
];

function Partners() {
  const t = useTranslations();

  const PartnersListing = ({ isGlobal, partners }: { isGlobal: boolean; partners: { isGlobal: boolean; title: string; imgUrl?: string }[] }) => {
    return (
      <>
        <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg uppercase text-center">
          {isGlobal ? t("🌐 Xalqaro") : t("🇺🇿 Mahalliy")}
        </div>

        {partners.map((partner) => {
          return (
            <div key={partner.title} className="w-full bg-gray-50 aspect-square flex items-center justify-center rounded-lg uppercase text-center">
              {partner.imgUrl ? (
                <img src={partner.imgUrl} alt={partner.title} className="w-full h-full object-contain" />
              ) : (
                <p className="text-xs px-2">{partner.title}</p>
              )}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="my-6 text-gray-500 text-center text">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">{t("🤝 Hamkorlarimiz")}</h1>

          <p className="w-full text-gray-500">
            {t(
              `Ekocarbon Services MCHJ faoliyatini xalqaro va mahalliy tashkilotlar bilan hamkorlikda olib boradi. Bizning ishonchli hamkorlarimiz quyidagilar:`
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 lg:gap-6">
          <PartnersListing isGlobal={true} partners={partners.filter((partner) => partner.isGlobal)} />
        </div>

        <div className="h-[20px]" />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 lg:gap-6">
          <PartnersListing isGlobal={false} partners={partners.filter((partner) => !partner.isGlobal)} />
        </div>
      </div>
    </>
  );
}

export default Partners;
