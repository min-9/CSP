import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:max-lg:mr-20 md:max-lg:pr-12 xl:pr-28 2xl:pr-28">
              <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
                About <code className="bg-gray-100 p-1 rounded">PSCode</code>
              </h1>
              <p className="mb-8 leading-relaxed text-lg md:max-lg:text-xl lg:text-xl max-md:text-xl">
                <code>PSCode</code>는 수학적인 문제들을 컴퓨터 프로그래밍으로
                해결해가는 퀴즈 풀이 사이트입니다.
              </p>
              <p className="mb-8 leading-relaxed text-lg md:max-lg:text-xl lg:text-xl max-md:text-xl">
                여기에서 제공되는 문제들을 해결하기 위해서는 수학적인 지식이나
                프로그래밍 솜씨 한가지만으로는 충분하지 않습니다. 수학적인
                지식이 있다면 좀 더 우아하고 효율적인 방법을 찾을 수 있겠지만,
                대부분의 경우 문제를 해결하려면 컴퓨터에 대한 지식과 프로그래밍
                기법을 동원해야 합니다.
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className="lg:w-1/4 md:w-2/5 w-5/6 xl:w-1/6 2xl:w-1/6">
              <Image
                className="object-cover object-center rounded h-auto"
                alt="Leibniz"
                width="478"
                height="0"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
                src="/images/Leibniz.jpeg"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
