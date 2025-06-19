import type React from "react";
import { useState } from "react";
import { regions } from "./regions";
import { useTranslations } from "next-intl";

interface Region {
  d: string;
  id: string;
  name: string;
  capital: string;
  area: number;
  population: number;
  coordinates: number[];
  color: string;
  description: string;
}

interface TooltipData {
  region: Region;
  x: number;
  y: number;
}

export default function UzbekistanMap() {
  const managersByRegion = {
    Tashkent: {
      name: `PRIMKULOVA TATYANA MITROFANOVNA`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Ferghana: {
      name: `YUSUPOV FURKATBEK ULUGBEKOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Namangan: {
      name: `YUSUPOV FURKATBEK ULUGBEKOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Andijon: {
      name: `YUSUPOV FURKATBEK ULUGBEKOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Samarkand: {
      name: `TUXTAMISHEV SAXOBJON SAYDKASIMOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Sirdaryo: {
      name: `TUXTAMISHEV SAXOBJON SAYDKASIMOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Jizzakh: {
      name: `TUXTAMISHEV SAXOBJON SAYDKASIMOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Kashkadarya: {
      name: `AZIMOV SHUXRAT VOXIDOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Surkhandarya: {
      name: `AZIMOV SHUXRAT VOXIDOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Karakalpakstan: {
      name: `KUDAYBERGENOV AZAT BAZARBAEVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Khorezm: {
      name: `KUDAYBERGENOV AZAT BAZARBAEVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Navoi: {
      name: `AZIMOV SHUXRAT VOXIDOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
    Bukhoro: {
      name: `AZIMOV SHUXRAT VOXIDOVICH`,
      tel: `📞 Tel: [+998 ** *** ** **]`,
    },
  };
  const t = useTranslations();
  const [tooltip, setTooltip] = useState(null as any);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleMouseEnter = (region: any, event: React.MouseEvent) => {
    const svgRect = event.currentTarget.closest("svg")?.getBoundingClientRect();
    if (svgRect) {
      setTooltip({
        region,
        x: event.clientX - svgRect.left,
        y: event.clientY - svgRect.top,
      });
    }
    setHoveredRegion(region.id);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
    setHoveredRegion(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip) {
      const svgRect = event.currentTarget.getBoundingClientRect();
      setTooltip((prev: any) =>
        prev
          ? {
              ...prev,
              x: event.clientX - svgRect.left,
              y: event.clientY - svgRect.top,
            }
          : null
      );
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">{t("📍 Interaktiv xarita:")}</h1>

      <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
        <p className="w-full mx-auto">
          {t(`EkoCarbon Services MCHJ O'zbekiston bo'ylab keng tarmoqqa ega bo'lib, barcha hududlarda ekologik xizmatlarni tez va sifatli ko'rsatadi`)}
        </p>
      </div>

      <div className="relative">
        <svg width="1000" height="652" viewBox="0 0 1000 652" className="w-full h-auto border border-gray-200 rounded-lg" onMouseMove={handleMouseMove}>
          <g id="features">
            {regions.map((region) => {
              return (
                <path
                  d={region.d}
                  fill={region.color}
                  stroke="#ffffff"
                  strokeWidth="2"
                  opacity={hoveredRegion === "UZFA" ? "1" : "0.8"}
                  className="hover:opacity-100 transition-all duration-200 cursor-pointer drop-shadow-sm"
                  onMouseEnter={(e) => handleMouseEnter(region, e)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
          </g>
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-20 bg-white border border-gray-200 rounded-lg shadow-xl p-4  pointer-events-none"
            style={{
              left: tooltip.x - 100,
              top: tooltip.y + 50,
              transform: tooltip.x > 500 ? "translateX(-100%)" : "none",
            }}
          >
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="font-bold text-sm md:text-lg text-gray-800 flex items-center gap-2">
                  <div className="size-2 md:size-4 rounded-full" style={{ backgroundColor: tooltip.region.color }} />
                  {tooltip.region.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="col-span-2 space-y-3">
                  <p className="text-gray-800 text-sm md:text-lg">{managersByRegion[tooltip.region.name as keyof typeof managersByRegion].name}</p>
                  <p className="text-gray-800 text-sm md:text-lg">{managersByRegion[tooltip.region.name as keyof typeof managersByRegion].tel}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
