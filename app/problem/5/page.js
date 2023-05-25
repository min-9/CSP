'use client';
import { useState } from 'react';
import useTex from '@/hooks/tex';
import InputForm from '@/components/InputForm';

export default function Home() {
  const [isCorrect, setIsCorrect] = useState(false);
  const Tex = useTex();

  const fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

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
              <b>피보나치 수열 I</b>
            </p>
            <p className="mb-4">
              <small>Problem 5</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p>
                피보나치 수열 <Tex tex="\{F_n\}" />을 모든 자연수{' '}
                <Tex tex="n" />에 대하여 다음과 같이 정의합니다.
              </p>
              <p className="ml-8 p-4">
                <Tex
                  tex={`
                    F_n = \\begin{cases} 
                    1 & (n \\lt 3) \\\\
                    F_{n-1} + F_{n-2} & (n \\geq 3)
                    \\end{cases}
                  `}
                />
              </p>
              <p>
                <Tex tex="F_n" />을 12번째 항까지 차례대로 구하면 다음과
                같습니다.
              </p>
              <p className="ml-8 p-4">
                {fibs.map((fib, index) => (
                  <Tex key={index} tex={`F_{${index + 1}} = ${fib} \\\\`} />
                ))}
              </p>
              <p className="mb-4">
                이때 수열의 값은 <Tex tex="n = 12" />
                에서 처음으로 3자리가 됩니다.
              </p>
              <p>
                피보나치 수열에서 값이 처음으로 1000자리가 되는 것은 몇번째
                항입니까?
              </p>
            </div>
            <InputForm id={5} type="number" load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>피보나치 수(Fibonacci numbers)</b>
              </p>
              <p>
                피보나치 수 <Tex tex="F_n" />은 다음과 같은 초기값 및 점화식으로
                정의되는 수열이다.
              </p>
              <Tex
                tex="F_1 = 1,\ F_2 = 1,\ F_n = F_{n-1} + F_{n-2}\ (n \in \{3, 4, 5, \dots\})"
                block
              />
              <p>
                피보나치 수의 처음 몇 항은 다음과 같다.
                <br />
                1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
                1597, 2584, 4181, 6765, 10946, ...
              </p>
              <p>피보나치 수의 일반항은 다음과 같다.</p>
              <Tex
                tex="F_n = {\varphi^n - (1-\varphi)^n \over \sqrt{5} }"
                block
              />
              <p>
                여기서 <Tex tex="\varphi" />는 황금비이며, 이 값은 일반적으로
                1.618 정도로 알려져 있다. 이를 비네 공식(Binet's formula)이라고
                한다. 이는 레온하르트 오일러가 1765년 처음 발표했으나 잊혔다가,
                1848년 자크 비네에 의해 재발견되었다.
              </p>
              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/피보나치_수"
                  >
                    피보나치 수
                  </a>
                </li>
                <li>
                  OEIS,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://oeis.org/A000045"
                  >
                    A000045 Fibonacci numbers
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
