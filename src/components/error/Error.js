import Link from 'next/link';

export default () => (
  <main className="w-full flex flex-col justify-center items-center">
    <h1 className="text-9xl font-extrabold text-black opacity-80 tracking-widest">
      404
    </h1>
    <div
      className="bg-red-600 px-2 text-sm text-white rounded mb-28 mr-3 absolute"
      style={{ transform: 'rotate(12deg)' }}
    >
      Page Not Found
    </div>
    <div className="text-xl mt-14">요청하신 문제를 찾을 수 없습니다</div>
    <Link className="text-lg mt-14 hover:opacity-50" href="/prob_list">
      문제 목록 페이지로
    </Link>
  </main>
);
