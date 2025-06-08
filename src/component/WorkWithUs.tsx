const stats = [
  { name: "Выполненные заказы", value: "1000+" },
  { name: "Штатные сотрудники", value: "145+" },
  { name: "Потраченные часы", value: "~156 777" },
];

export default function WorkWithUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://plus.unsplash.com/premium_photo-1661962247387-6b5498e5b73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-50">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Работайте с нами</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Работайте с нами, чтобы получить профессиональные сантехнические услуги высокого качества.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
