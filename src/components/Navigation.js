import Link from 'next/link';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

export default ({ id, length }) => {
  const config = [
    {
      condition: id < 2,
      path: `/problem/${id - 1}`,
      Icon: LeftArrow,
    },
    {
      condition: id > length - 1,
      path: `/problem/${id + 1}`,
      Icon: RightArrow,
    },
  ];

  return (
    <div className="flex justify-end w-1/2 gap-4 items-center text-4xl text-blue-500 font-bold">
      {config.map(({ condition, path, Icon }, index) => (
        <Link
          key={index}
          className={`p-1 px-2 hover:text-blue-700 rounded ${
            condition ? 'hidden' : ''
          }`}
          href={path}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};
