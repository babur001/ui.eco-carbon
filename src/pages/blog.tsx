import BlogCard from "@/component/BlogCard";
import Layout from "@/component/Layout";
import { useTranslation } from "react-i18next";

export function getStaticProps() {
  return { props: {} };
}

export default function Blogs() {
  const { t } = useTranslation();

  return (
    <Layout>
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
        </div>
      </div>
    </Layout>
  );
}
