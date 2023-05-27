import Image from 'next/image';

export default function Page({ params, searchParams }) {
  const { id } = params;
  const { input } = searchParams;

  return (
    <main className="flex flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex max-md:flex-col md:flex-row gap-4">
            <div className="flex md:w-1/2 md:justify-end justify-center w-full">
              <Image
                className="object-cover object-center rounded h-auto"
                alt="answer_wrong"
                width="400"
                height="0"
                style={{
                  width: '250px',
                  height: 'auto',
                }}
                src={'/images/answer_wrong.png'}
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:justify-start gap-4 w-full max-md:text-lg">
              <p>
                제출하신 '{input}' 값은 <br />
                <b>안타깝지만 오답입니다.</b>
              </p>
              <p>
                당장에 정답이 아니면 어떻습니까? <br />
                퀴즈를 다르게 이해했을 가능성은 없는지 <br />
                성급하게 코딩하다 실수는 없었는지
              </p>
              <p>
                <a className="hover:opacity-50" href={`/problem/${id}`}>
                  [{id}번 문제]
                </a>
                로 돌아가서
              </p>
              <p>
                다시 꼼꼼히 확인해 보신다면 <br />
                곧, 정답을 찾으실 겁니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
