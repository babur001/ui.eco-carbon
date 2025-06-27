import { capitalizeFirstLetter } from "./capitalize-first-letter";

export const getLocaleNameOf = (name: string, lang: string) => {
  console.log(lang);

  if (lang.toLocaleLowerCase() === "uz") return name;
  return `${name}${capitalizeFirstLetter(lang)}`;
};
