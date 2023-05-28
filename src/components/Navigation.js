import Link from 'next/link';
import Icon from '@/components/icons/Icon';

export default ({ id, length }) => {
  const config = [
    {
      condition: id < 2,
      path: `/problem/${id - 1}`,
      Icon: Icon.LeftArrow,
    },
    {
      condition: id > length - 1,
      path: `/problem/${id + 1}`,
      Icon: Icon.RightArrow,
    },
  ];

  return (
    <div className="flex justify-end w-1/2 gap-4 items-center text-4xl text-blue-500 font-bold">
      {config.map(({ condition, path, Icon }, idx) => (
        <Link
          key={idx}
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
