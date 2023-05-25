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
              <b>20세기의 매월 1일</b>
            </p>
            <p className="mb-4">
              <small>Problem 2</small>
            </p>
            <div
              className="w-full p-6 mb-12"
              style={{ border: '1px solid gray' }}
            >
              <p className="mb-4">
                다음은 달력에 관한 몇 가지 일반적인 정보입니다 (필요한 경우 좀
                더 연구를 해 보셔도 좋습니다).
              </p>

              <ul className="mb-4 ml-12 list-disc list-outside">
                <li>1900년 1월 1일은 월요일이다.</li>
                <li>
                  4월, 6월, 9월, 11월은 30일까지 있고, 1월, 3월, 5월, 7월, 8월,
                  10월, 12월은 31일까지 있다.
                </li>
                <li>2월은 28일이지만, 윤년에는 29일까지 있다.</li>
                <li>
                  <p>
                    윤년은 연도를 4로 나누어 떨어지는 해를 말한다. 하지만
                    400으로 나누어 떨어지지 않는 매 100년째는 윤년이 아니며,
                    400으로 나누어 떨어지면 윤년이다.
                  </p>
                </li>
              </ul>

              <p>
                20세기 (1901년 1월 1일 ~ 2000년 12월 31일) 에서, 매월 1일이
                일요일인 경우는 총 몇 번입니까?
              </p>
            </div>
            <InputForm id={2} type="number" load={getState} />

            <div
              className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
              style={{
                border: '1px solid gray',
                display: isCorrect ? 'flex' : 'none',
              }}
            >
              <p>
                <b>태양력의 윤년(Leap year)</b>
              </p>

              <p>
                현재 전 세계 대부분의 나라에서 쓰는 그레고리력은 4년에 반드시
                하루씩 윤날(2월 29일)을 추가하는 율리우스력을 보완한 것으로,
                태양년과의 편차를 줄이기 위해 율리우스력의 400년에서 3일(세 번의
                윤년)을 뺐다. 즉, 400년에 97년은 윤년이 되며, 1년은 평균
                365.2425일이 된다. 이는 춘분점을 기준으로 한 태양년보다
                0.0003일(26초) 길기 때문에, 약 3,300년마다 1일의 편차가 난다.
              </p>

              <p>
                그레고리력의 정확한 윤년 규칙을 알고리즘으로 표현하면 다음과
                같다.
                <code
                  className="block text-sm w-full p-6 rounded-md"
                  style={{ backgroundColor: '#fafafa' }}
                >
                  <b style={{ color: '#56B6C2' }}>
                    <i>if</i>
                  </b>{' '}
                  (연도 <b style={{ color: '#56B6C2' }}>mod</b>{' '}
                  <span style={{ color: '#E06C75' }}>4</span>{' '}
                  <span style={{ color: '#56B6C2', fontSize: '1rem' }}>
                    &ne;
                  </span>{' '}
                  <span style={{ color: '#E06C75' }}>0</span>){' '}
                  <b style={{ color: '#56B6C2' }}>
                    <i>then</i>
                  </b>{' '}
                  (평년) <br />
                  <b style={{ color: '#56B6C2' }}>
                    <i>else if</i>
                  </b>{' '}
                  (연도 <b style={{ color: '#56B6C2' }}>mod</b>{' '}
                  <span style={{ color: '#E06C75' }}>100</span>{' '}
                  <span style={{ color: '#56B6C2', fontSize: '1rem' }}>
                    &ne;
                  </span>{' '}
                  <span style={{ color: '#E06C75' }}>0</span>){' '}
                  <b style={{ color: '#56B6C2' }}>
                    <i>then</i>
                  </b>{' '}
                  (윤년) <br />
                  <b style={{ color: '#56B6C2' }}>
                    <i>else if</i>
                  </b>{' '}
                  (연도 <b style={{ color: '#56B6C2' }}>mod</b>{' '}
                  <span style={{ color: '#E06C75' }}>400</span>{' '}
                  <span style={{ color: '#56B6C2', fontSize: '1rem' }}>
                    &ne;
                  </span>{' '}
                  <span style={{ color: '#E06C75' }}>0</span>){' '}
                  <b style={{ color: '#56B6C2' }}>
                    <i>then</i>
                  </b>{' '}
                  (평년) <br />
                  <b style={{ color: '#56B6C2' }}>
                    <i>else</i>
                  </b>{' '}
                  (윤년)
                </code>
              </p>

              <ul className="ml-12 list-disc list-outside">
                <li>
                  위키백과,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://ko.wikipedia.org/wiki/윤년#태양력의_윤년"
                  >
                    태양력의 윤년
                  </a>
                </li>
                <li>
                  Wikipedia,{' '}
                  <a
                    className="hover:opacity-50"
                    href="https://en.wikipedia.org/wiki/Leap_연도#Algorithm"
                  >
                    leap 연도
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
