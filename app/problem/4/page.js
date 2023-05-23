'use client';
import { useState } from 'react';
import InputForm from '@/components/InputForm';
import Tex from '@/components/Tex';

export default function Home() {
  const [isCorrect, setIsCorrect] = useState(false);

  /**
   * @param {boolean} state
   */
  const getState = state => {
    setIsCorrect(state);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <p className="text-xl">
              <b>친화수의 합</b>
            </p>
            <p className="mb-4">
              <small>Problem 4</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p>
                <Tex id="1" tex="n" />의 약수들 중에서 자신을 제외한 것의 합을{' '}
                <Tex id="2" tex="d(n)" />
                으로 정의했을 때,
              </p>
              <p>
                서로 다른 두 정수 <Tex id="3" tex={'a,\\ b'} />에 대하여{' '}
                <Tex
                  id="4"
                  tex="d(a) =
                b"
                />{' '}
                이고 <Tex id="5" tex="d(b) = a" /> 이면
              </p>
              <p className="mb-4">
                <Tex id="6" tex="a,\ b" />는 친화쌍이라 하고{' '}
                <Tex id="7" tex="a" />와 <Tex id="8" tex="b" />를 각각{' '}
                <u>친화수</u>라고 합니다.
              </p>
              <p>
                예를 들어 220의 약수는 자신을 제외하면 1, 2, 4, 5, 10, 11, 20,
                22, 44, 55, 110 이므로 그 합은 <Tex id="9" tex="d(220) = 284" />{' '}
                입니다.
              </p>
              <p>
                또 284의 약수는 자신을 제외하면 1, 2, 4, 71, 142 이므로{' '}
                <Tex id="10" tex="d(284) = 220" /> 입니다.
              </p>
              <p className="mb-4">따라서 220과 284는 친화쌍이 됩니다.</p>
              <p>10000 이하의 친화수들을 모두 찾아서 그 합을 구하세요.</p>
            </div>
            <InputForm id={4} load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>친화수(amicable numbers)</b>
              </p>
              <p>
                두 수의 쌍이 있어, 어느 한 수의 진약수를 모두 더하면 다른 수가
                되는 것을 말한다. 220과 284의 쌍이 그 예이다. 220의 진약수는 1,
                2, 4, 5, 10, 11, 20, 22, 44, 55, 110로 모두 더하면 284가 된다.
                반대로 284의 모든 진약수 1, 2, 4, 71, 142를 모두 더하면 220이
                된다.
              </p>
              <p>
                (220, 284) 다음에 구해진 친화수는 (17296, 18416)이다. 이
                친화수는 그 이전에도 구해져 있었지만, 피에르 드 페르마에 의해
                재발견되었다. 그 후, 레온하르트 오일러에 의해 60개 정도의
                친화수가 구해졌다. 1946년에는 390쌍의 알려진 쌍이 있었지만,
                컴퓨터의 발달로 그 이후에 수천 쌍이 발견되었다. 현재까지 알려진
                친화수는 2017년 4월 기준으로, 12억 개 이상이다.
              </p>

              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/친화수"
                  >
                    친화수
                  </a>
                </li>
                <li>
                  Wikipedia,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://en.wikipedia.org/wiki/Amicable_numbers"
                  >
                    Amicable numbers
                  </a>
                </li>
                <li>
                  OEIS,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://oeis.org/A259180"
                  >
                    A259180 Amicable pairs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
