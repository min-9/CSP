import Link from 'next/link';

export default function Prob({ title, level, url, tags }) {
  return (
    <Link className="xl:w-1/3 max-lg:w-1/2 max-md:w-full w-1/3 p-4" href={url}>
      <div className="border border-gray-200 p-6 rounded-lg">
        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{level}</p>
        {tags.map((tag, id) => (
          <div
            key={id}
            className="px-2 py-1 inline-block text-center text-sm mt-2 bg-indigo-200 rounded mr-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
}
