import dayjs from "dayjs";
import { truncate } from "lodash";
import { Calendar } from "lucide-react";

function BlogCard({ title, img, desc, createdAt }: { title: string; img: string; desc: string; createdAt: string }) {
  return (
    <>
      <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow">
        <div className="relative h-40 w-full overflow-hidden bg-gray-100">
          <img
            alt="Autonomous Software Maintenance Has Arrived"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
            src={img}
            style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center">
            <div className="inline-flex items-center gap-x-2 text-xs bg-gray-100 py-1 px-2 rounded-md">
              <Calendar strokeWidth={1} size={16} />
              <time dateTime="2020-03-16" className="text-gray-500">
                {dayjs(createdAt).format("DD.MM.YYYY")}
              </time>
            </div>
          </div>
          <h3 className="mb-1 text-base font-medium text-gray-900 group-hover:text-gray-700">{title}</h3>
          <p className="mb-3 line-clamp-2 text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: truncate(desc, { length: 150 }) }} />
        </div>
      </div>
    </>
  );
}

export default BlogCard;
