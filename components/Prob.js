import Link from 'next/link';

export default function Prob({ title, level, url }) {
  return (
    <Link className="xl:w-1/3 max-lg:w-1/2 max-md:w-full w-1/3 p-4" href={url}>
      <div className="border border-gray-200 p-6 rounded-lg">
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{level}</p>
      </div>
    </Link>
  );
}
