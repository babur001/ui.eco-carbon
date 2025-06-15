import { useState } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ChevronDown, Home, Info, List, Menu, NotebookPen, PhoneCall, ShieldUser, Wrench, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useRouter();
  const { t } = useTranslation();

  const menu = [
    {
      title: t("Asosiy"),
      children: [
        { name: t("Asosiy"), href: "#main", icon: Home },
        { name: t("Biz haqimizda"), href: "#aboutUs", icon: Info },
        { name: t("Natijalarimiz"), href: "#results", icon: Wrench },
        { name: t("Xizmatlar"), href: "#services", icon: List },
        { name: t("Bizning jamoa"), href: "#team", icon: ShieldUser },
        { name: t("Aloqa"), href: "#contact", icon: NotebookPen },
      ],
    },
    { title: t("Blog"), href: "/blog", children: [] },
    { title: t("Aloqa"), href: "#contact", children: [] },
  ];

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt={"Logo Alt"} src="/logo.png" className="h-14 w-auto" />
          </a>
        </div>
        <div className="flex gap-5 lg:hidden">
          <LanguagePicker activeLang={locale} />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        {menu.map((m) => (
          <PopoverGroup key={m.title} className="hidden lg:flex lg:gap-x-5">
            {m.children.length > 0 ? (
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none focus:ring-0 cursor-pointer hover:bg-gray-100 !pl-3 pr-2 py-1 rounded-md !gap-2">
                  {m.title}
                  <ChevronDown aria-hidden="true" className="size-5 flex-none text-black" />
                </PopoverButton>
                <PopoverPanel className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {m.children.map((item) => (
                      <PopoverButton key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm/6 hover:bg-gray-50">
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-primary" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </PopoverButton>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              <a href={m.href} className="text-sm/6 font-semibold text-black hover:bg-gray-100 !pl-3 pr-2 py-1 rounded-md !gap-2">
                {m.title}
              </a>
            )}
          </PopoverGroup>
        ))}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
          <LanguagePicker activeLang={locale} />

          <a
            className="h-12 px-4 inline-flex rounded-lg justify-center items-center gap-x-2 text-sm font-medium border border-transparent bg-primary text-white hover:bg-blue-700"
            href="#"
          >
            <PhoneCall strokeWidth={2} size={16} />
            {t("Qo'ng'iroq qilish")}
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt={"Logo Alt"} src="/logo.png" className="h-14 w-auto" />
            </a>

            <div className="flex">
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.map((m) => (
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
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
