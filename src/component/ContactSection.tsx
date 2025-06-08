import { Building } from "lucide-react";
import React from "react";

export default function ContactSection() {
  const companyInfo = {
    contact: {
      address: "100115 Respublic of Uzbekistan, Tashkent city, Chilanzar district, KICHIK XALQA YO’LI 2A-UY",
      phone: "+998954397101",
      email: "santexnika@yandex.com",
    },
  };

  return (
    <section id="contact" className="md:py-24 !py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Свяжитесь с нами</h2>
          <p className="mt-1 text-gray-600">Есть вопросы о наших продуктах? Свяжитесь с нами.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-medium mb-6">{"Контактная информация"}</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{"Компания"}</p>
                  <p className="!my-0 font-medium">OOO Santexnika</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary mt-1 flex-shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="font-medium">{"Адрес"}</p>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.286131%2C41.324718&mode=usermaps&source=mapframe&um=constructor%3A5ae1e7ef2e099beab857784842b3021a93263f958b6ca09ae9c5255137235493&utm_source=mapframe&z=14"
                    target="_blank"
                    className="text-muted-foreground"
                  >
                    {companyInfo.contact.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary mt-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="font-medium">{"Телефон"}</p>
                  <a href="tel:+998954397101" className="text-muted-foreground">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary mt-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <p className="font-medium">{"Email"}</p>
                  <a href="mailto:foodsfruits@yandex.com" className="text-muted-foreground">
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">{"Часы работы"}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{"Понедельник - Пятница:"}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{"Суббота:"}</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{"Воскресенье:"}</span>
                  <span>{"Выходной"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A5ae1e7ef2e099beab857784842b3021a93263f958b6ca09ae9c5255137235493&source=constructor"
              width="100%"
              height="100%"
              //   frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
