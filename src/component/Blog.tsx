import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";

function Blog() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-5">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t("Blog")}</h2>
        <p className="mt-1 text-gray-600">{t("Kompaniyamizdagi so'ngi yangiliklar")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          title="EkoCarbon Services"
          desc="O'zbekistonda gaz sizib chiqishini aniqlash vatuzatishga qaratilgan ilg'or dasturlarni amalga oshirmoqda."
          href={`/blog/${1}`}
          img={`/people/12.jpg`}
        />
        <BlogCard
          title="EkoCarbon Services"
          desc="O'zbekistonda gaz sizib chiqishini aniqlash vatuzatishga qaratilgan ilg'or dasturlarni amalga oshirmoqda."
          href={`/blog/${1}`}
          img={`/people/12.jpg`}
        />
        <BlogCard
          title="EkoCarbon Services"
          desc="O'zbekistonda gaz sizib chiqishini aniqlash vatuzatishga qaratilgan ilg'or dasturlarni amalga oshirmoqda."
          href={`/blog/${1}`}
          img={`/people/12.jpg`}
        />
      </div>

      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          {t("Barchasi")}
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Blog;
