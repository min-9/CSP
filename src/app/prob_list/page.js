import ProbList from '@/components/ProbList';

export const metadata = {
  title: '문제 목록',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Problems
              </h1>
            </div>
            <ProbList />
          </div>
        </section>
      </div>
    </main>
  );
}
