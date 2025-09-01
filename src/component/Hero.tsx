import { ArrowDown, PhoneCall } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { company } from "@/utils/contact-details";

export default function Hero() {
  const t = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current!.play();
      }, 300);
    }
  }, []);

  return (
    <div id="main" className="px-4 sm:px-6 pt-10">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-10 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight">
            {t("Atrof-muhit uchun")} –{" "}
            <span className="text-primary block">
              {t("innovatsion yechimlar bilan")}!
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-800">{t(`main_sub_title`)}</p>

          {/* <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href={`tel:${company.tel}`}
            >
              <PhoneCall strokeWidth={2} size={16} />
              {t("Qo'ng'iroq qilish")}
            </a>
          </div> */}
        </div>

        <div className="relative pb-5">
          <video
            ref={videoRef}
            muted
            autoPlay
            controls
            className="max-h-[500px] object-contain w-full rounded-md"
            //
          >
            <source
              src="https://cdn-cf-east.streamable.com/video/mp4/nfydgh.mp4?Expires=1750248635440&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Ut4S-wXGtgKUi3VviefugBFky6fZYD9rN7LKUsoSuAwoMdpwPA-TmxwxsDiy0TLiN1Y~lXH6IQY9uS1OBGtIWl~05eLDnpr~TZBItSCWtH8EE1rWLayD66QYlyU0w8Eins9y3~4izjwf1Rr1H6CRewHG6O6mYTgFaRq3u2~mxT1dG2kQzUHfiFyZ2fuhVh3MKRyRJ3B0XhITpNxOXgp8j0L-2itKtdU4mOwtGB1PxUqb8hFirpM1mv-stR1SuG0WdFt4yJi4jBTZn8Rbp2ShFJ6~DU7We0zsvCv1RgR1HpbrAlmxYU8kfXvz~F33KIuD~xVYBIoaKlMIHzqtu7Y1bw__"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
        </div>
      </div>
    </div>
  );
}
