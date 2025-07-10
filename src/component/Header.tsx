import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import LanguagePicker from "./LanguagePicker";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useRouter();

  const menu = [
    { title: t("Asosiy"), href: "/", children: [] },
    { title: t("Proektlarimiz"), href: `/${locale}/projects`, children: [] },
    { title: t("Xizmatlar"), href: `/${locale}/services`, children: [] },
    { title: t("Bizning jamoa"), href: `/${locale}/team`, children: [] },
    { title: t("Blog"), href: `/${locale}/blog`, children: [] },
    { title: t("Aloqa"), href: `/${locale}/contact`, children: [] },
  ];

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img alt={"Logo Alt"} src="/logo.png" className="h-14 w-auto" />
          </Link>
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

        <div className="lg:flex items-center justify-between p-6 hidden lg:px-8">
          {menu.map((m) => (
            <div key={m.title} className="hidden lg:flex lg:gap-x-3">
              <a href={m.href || "#"} className="text-sm/6 font-semibold text-black hover:bg-gray-100 !pl-3 pr-2 py-1 rounded-md !gap-2">
                {m.title}
              </a>
            </div>
          ))}

          <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-5 items-center gap-3">
            <LanguagePicker activeLang={locale} />
          </div>
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
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href={m.href}
                    className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {m.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
