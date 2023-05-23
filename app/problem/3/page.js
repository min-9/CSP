'use client';
import { useState } from 'react';
import useTex from '@/hooks/tex';
import InputForm from '@/components/InputForm';

export default function Home() {
  const [isCorrect, setIsCorrect] = useState(false);
  const Tex = useTex();

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
              <b>피타고라스 수 I</b>
            </p>
            <p className="mb-4">
              <small>Problem 3</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p>
                세 자연수 <Tex tex={'a,\\ b,\\ c'} /> 가 피타고라스 정리{' '}
                <Tex tex={'a^2 + b^2 = c^2'} /> 를 만족하면 피타고라스 수라고
                부릅니다 (여기서 <Tex tex={'a \\lt b \\lt c'} /> ).
              </p>
              <p className="mb-4">
                예를 들면 <b>3</b>
                <sup>2</sup> + <b>4</b>
                <sup>2</sup> = 9 + 16 = 25 = <b>5</b>
                <sup>2</sup> 이므로 3, 4, 5는 피타고라스 수입니다.
              </p>
              <p>
                <Tex tex={'a + b + c = 1000'} /> 인 피타고라스 수{' '}
                <Tex tex={'a,\\ b,\\ c'} />는 한 가지 뿐입니다. 이 때,{' '}
                <Tex tex={'a \\times b \\times c'} /> 는 얼마입니까?
              </p>
            </div>
            <InputForm id={3} load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>피타고라스 트리플(Pythagorean triple)</b>
              </p>
              <p>
                피타고라스 정리 <Tex tex="a^2 + b^2 = c^2" />을 만족시키는 세
                양의 정수의 튜플 <Tex tex="(a,b,c)" />
                이다. 즉, 유클리드 기하학의 직각 삼각형의 세 변을 이루는 세 양의
                정수의 튜플이다. 예를 들어, <Tex tex="(3,4,5)" />는 피타고라스
                트리플이다. 원시(primitive) 피타고라스 트리플은 피타고라스
                트리플을 이루는 세 수가 서로소인 경우이다.
              </p>
              <p>
                피타고라스 트리플은 항상 <Tex tex="(m^2−n^2,2mn,m^2+n^2)" />{' '}
                <Tex tex="(m>n>0)" /> 꼴이다. 이러한 꼴이 원시 피타고라스
                트리플일 필요 충분 조건은 <Tex tex="m,n" />이 짝수를 포함하는
                서로소 정수인 것이다. 특히, <Tex tex="(m^2−1,2m,m^2+1)" />은
                항상 피타고라스 트리플이다. 여기서{' '}
                <Tex tex="a = m^2−n^2,b = 2mn,c=m^2+n^2" />
                관계는 피타고라스 트리플을 구하는 프로그래밍에서 매우 유용하게
                사용된다.
              </p>
              <p>
                원시 피타고라스 트리플은 <Tex tex="(3,4,5)" />
                로부터 시작하여 아래 세 행렬을 곱하여 얻어낼 수도 있다.
              </p>
              <Tex
                id="16"
                tex={`\\begin{pmatrix}
                  1 & 2 & 2 \\\\
                  2 & 1 & 2 \\\\
                  2 & 2 & 3
                \\end{pmatrix},\
                \\begin{pmatrix}
                  -1 & -2 & -2 \\\\
                  2 & 1 & 2 \\\\
                  2 & 2 & 3
                \\end{pmatrix},\
                \\begin{pmatrix}
                  1 & 2 & 2 \\\\
                  -2 & -1 & -2 \\\\
                  2 & 2 & 3
                \\end{pmatrix}
                `}
                block
              />
              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/피타고라스_삼조"
                  >
                    피타고라스 삼조
                  </a>
                </li>
                <li>
                  MathWorld,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://mathworld.wolfram.com/PythagoreanTriple.html"
                  >
                    Pythagorean Triple
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
