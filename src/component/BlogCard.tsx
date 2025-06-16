import Link from "next/link";
import React from "react";

function BlogCard({ title, img, desc, href }: { title: string; img: string; desc: string; href: string }) {
  return (
    <Link
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
      href={href}
    >
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full aspect-video object-cover rounded-xl" src={img} alt="Blog Image" />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-5 text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
