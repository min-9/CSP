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
              <b>가장 큰 소인수</b>
            </p>
            <p className="mb-4">
              <small>Problem 1</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p>
                어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이
                소수들을 그 수의 소인수라고 합니다.
              </p>
              <p>
                예를 들면 <b>13195</b>의 소인수는 <b>5, 7, 13, 29</b> 입니다.
              </p>
              <br />
              <p>
                <b>600851475143</b>의 소인수 중에서 가장 큰 수를 구하세요.
              </p>
            </div>
            <InputForm id={1} load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>소인수분해(prime factorization)</b>
              </p>
              <p>
                합성수를 소수의 곱으로 나타내는 방법을 말한다. 산술의 기본
                정리에 의해 모든 양의 정수는 소수의 곱으로 표현하는 방법이 (곱의
                순서를 바꾸는 것을 제외하면) 유일하게 존재한다. 그러나 산술의
                기본정리는 그 소인수분해를 하는 방법을 알려주지는 않는다. 단지
                존재성을 확인해 줄 뿐이다.
              </p>
              <p>
                <b>소인수분해 알고리즘</b>
              </p>
              <p>
                현대의 전자기 기반 컴퓨터상에서 소인수분해에 대한 다항식 시간
                알고리즘은 알려져 있지 않다. 단, 이론적인 양자컴퓨터에서의
                다항식 시간 소인수분해 알고리즘 (쇼어의 알고리즘)은 존재한다.
                하지만 아직까지 어떤 합성수를 다항 시간 안에 소인수분해하기는
                어려운 문제이며, 예를 들어 193자리 수(RSA-640)는 5개월간 30개의
                2.2 GHz 옵테론 CPU를 동원하여 소인수분해 되었다. 소인수분해의
                난해함은 RSA와 같은 현대 암호의 핵심적 부분이 된다.
              </p>
              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/소인수분해"
                  >
                    소인수분해
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
