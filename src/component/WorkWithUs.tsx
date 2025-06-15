const stats = [
  { name: "Gazsizib chiqish holatlari aniqlandi", value: "52 000" },
  { name: "Tonnagacha CO₂ ekvivalentiga teng emissiyaning oldini olish imkonini berdi.", value: "8 000 000" },
];

export default function WorkWithUs() {
  return (
    <div id="results" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src={`/people/13.jpg`} className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-50">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Climate Compass</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            O'zbekistonda gaz sizib chiqishini aniqlash vatuzatishga qaratilgan ilg'or dasturlarni amalga oshirmoqda. Shu vaqtgacha:
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col gap-1">
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
