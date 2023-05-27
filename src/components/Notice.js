export default function Notice({ category, date, title, description }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
          {category}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <div className="leading-relaxed">
          {description.map((phase, index) => (
            <p key={index}>{phase}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
