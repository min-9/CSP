'use client';
import { useState } from 'react';
import InputForm from '@/components/InputForm';

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
              <b>대칭수의 합</b>
            </p>
            <p className="mb-4">
              <small>Problem 6</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p className="mb-4">
                대칭수(palindrome)인 585는 2진수로 나타내도 1001001001
                <sub>2</sub>가 되어 여전히 대칭수입니다.
              </p>
              <p className="mb-4">
                10진법과 2진법으로 모두 대칭수인 1,000,000 미만 수의 합을
                구하세요.
              </p>
              <p>(주의: 첫번째 자리가 0이면 대칭수가 아님)</p>
            </div>
            <InputForm id={6} type="number" load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>대칭수(palindrome)</b>
              </p>
              <p>
                순서대로 읽은 수와 거꾸로 읽은 수가 같은 수를 말한다. 예를 들어
                34543은 대칭수이고, 34567은 대칭수가 아니다. 대칭수는 유희
                수학에서 주목받는 수이며, 일반적으로 어떤 성질을 가지는 동시에
                대칭인 수를 다룬다. 예로 0, 1, 14641, 104060401, 1004006004001,
                ...은 네 제곱인 대칭수이다. 회문수(回文數)라고도 한다.
              </p>
              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/대칭수"
                  >
                    대칭수
                  </a>
                </li>
                <li>
                  OEIS,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://oeis.org/A002113"
                  >
                    A002113 Palindromes in base 10
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
