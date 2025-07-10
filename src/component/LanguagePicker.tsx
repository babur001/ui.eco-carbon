import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "uz", name: "O'zbek tili", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
] as const;

export default function LanguagePicker({ activeLang }: { activeLang: any }) {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find((language) => language.code === activeLang) as (typeof languages)[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    router.push(router.asPath, router.asPath, { locale: language.code });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex rounded-lg items-center text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
      >
        <span className="mr-2">{selectedLanguage.flag}</span>
        <span>{selectedLanguage.name}</span>
        <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelect(language as (typeof languages)[0])}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900"
              >
                <span className="mr-2">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
