"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import {
  ArrowUpAz,
  BarChart,
  ChevronDown,
  Fingerprint,
  Hamburger,
  Home,
  Info,
  List,
  Menu,
  NotebookPen,
  PhoneCall,
  PieChart,
  PlayCircle,
  ShieldUser,
  SquarePlus,
  TextCursor,
  Wrench,
  X,
} from "lucide-react";

const menu = [
  {
    title: "Главная",
    href: "",
    children: [
      { name: "Главная", description: "Узнайте больше о наших услугах и преимуществах", href: "#", icon: Home },
      { name: "О нас", description: "Познакомьтесь с нашей историей и миссией", href: "#", icon: Info },
      { name: "Работайте с нами", description: "Присоединяйтесь к нашей команде профессионалов", href: "#", icon: Wrench },
      { name: "Что мы предлагаем", description: "Ознакомьтесь с полным спектром наших услуг", href: "#", icon: List },
      { name: "Наша команда", description: "Узнайте о наших специалистах и их опыте", href: "#", icon: ShieldUser },
      { name: "Контакты", description: "Свяжитесь с нами для консультации или вопросов", href: "#", icon: NotebookPen },
    ],
    callsToAction: [
      { name: "Посмотреть демо", href: "https://www.youtube.com/watch?v=Q9vyqxWs7nI", icon: PlayCircle },
      { name: "Позвонить", href: "tel:+998954397101", icon: PhoneCall },
    ],
  },
  { title: "Блог", href: "", children: [] },
  { title: "Контакты", href: "", children: [] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo.png" className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        {menu.map((m) => {
          return (
            <>
              <PopoverGroup className="hidden lg:flex lg:gap-x-5">
                {m.children.length > 0 ? (
                  <>
                    <Popover className="relative">
                      <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none focus:ring-0 cursor-pointer hover:bg-gray-100 !pl-3 pr-2 py-1 rounded-md !gap-2">
                        Главная
                        <ChevronDown aria-hidden="true" className="size-5 flex-none text-black" />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        <div className="p-4">
                          {m.children.map((item) => (
                            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-primary" />
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-gray-900">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                          {m.callsToAction!.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </PopoverPanel>
                    </Popover>
                  </>
                ) : (
                  <a href={m.href} className="text-sm/6 font-semibold text-black hover:bg-gray-100 !pl-3 pr-2 py-1 rounded-md !gap-2">
                    {m.title}
                  </a>
                )}
              </PopoverGroup>
            </>
          );
        })}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            className="py-3 px-4 inline-flex rounded-full justify-center items-center gap-x-2 text-sm font-medium border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <PhoneCall strokeWidth={2} size={16} />
            Позвонить
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.png" className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.map((m) => {
                  if (m.children.length > 0) {
                    return (
                      <Disclosure key={m.title} as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                          {m.title}
                          <ChevronDown aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {m.children.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    );
                  }
                  return (
                    <>
                      <a href={m.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        {m.title}
                      </a>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
