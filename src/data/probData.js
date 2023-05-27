export const probData = [
  {
    title: '가장 큰 소인수',
    level: 'Lv. 1',
    url: '/problem/1',
    tags: ['소인수분해'],
    Description: ({ Tex }) => (
      <>
        <p>
          어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을
          그 수의 소인수라고 합니다.
        </p>
        <p>
          예를 들면 <b>13195</b>의 소인수는 <b>5, 7, 13, 29</b> 입니다.
        </p>
        <br />
        <p>
          <b>600851475143</b>의 소인수 중에서 가장 큰 수를 구하세요.
        </p>
      </>
    ),
    Info: ({ Tex }) => (
      <>
        <p>
          <b>소인수분해(prime factorization)</b>
        </p>
        <p>
          합성수를 소수의 곱으로 나타내는 방법을 말한다. 산술의 기본 정리에 의해
          모든 양의 정수는 소수의 곱으로 표현하는 방법이 (곱의 순서를 바꾸는
          것을 제외하면) 유일하게 존재한다. 그러나 산술의 기본정리는 그
          소인수분해를 하는 방법을 알려주지는 않는다. 단지 존재성을 확인해 줄
          뿐이다.
        </p>
        <p>
          <b>소인수분해 알고리즘</b>
        </p>
        <p>
          현대의 전자기 기반 컴퓨터상에서 소인수분해에 대한 다항식 시간
          알고리즘은 알려져 있지 않다. 단, 이론적인 양자컴퓨터에서의 다항식 시간
          소인수분해 알고리즘 (쇼어의 알고리즘)은 존재한다. 하지만 아직까지 어떤
          합성수를 다항 시간 안에 소인수분해하기는 어려운 문제이며, 예를 들어
          193자리 수(RSA-640)는 5개월간 30개의 2.2 GHz 옵테론 CPU를 동원하여
          소인수분해 되었다. 소인수분해의 난해함은 RSA와 같은 현대 암호의 핵심적
          부분이 된다.
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
      </>
    ),
  },
  {
    title: '20세기의 매월 1일',
    level: 'Lv. 1',
    url: '/problem/2',
    tags: ['달력'],
    Description: ({ Tex }) => (
      <>
        <p className="mb-4">
          다음은 달력에 관한 몇 가지 일반적인 정보입니다 (필요한 경우 좀 더
          연구를 해 보셔도 좋습니다).
        </p>

        <ul className="mb-4 ml-12 list-disc list-outside">
          <li>1900년 1월 1일은 월요일이다.</li>
          <li>
            4월, 6월, 9월, 11월은 30일까지 있고, 1월, 3월, 5월, 7월, 8월, 10월,
            12월은 31일까지 있다.
          </li>
          <li>2월은 28일이지만, 윤년에는 29일까지 있다.</li>
          <li>
            <p>
              윤년은 연도를 4로 나누어 떨어지는 해를 말한다. 하지만 400으로
              나누어 떨어지지 않는 매 100년째는 윤년이 아니며, 400으로 나누어
              떨어지면 윤년이다.
            </p>
          </li>
        </ul>

        <p>
          20세기 (1901년 1월 1일 ~ 2000년 12월 31일) 에서, 매월 1일이 일요일인
          경우는 총 몇 번입니까?
        </p>
      </>
    ),
    Info: ({ Tex }) => (
      <>
        <p>
          <b>태양력의 윤년(Leap year)</b>
        </p>

        <p>
          현재 전 세계 대부분의 나라에서 쓰는 그레고리력은 4년에 반드시 하루씩
          윤날(2월 29일)을 추가하는 율리우스력을 보완한 것으로, 태양년과의
          편차를 줄이기 위해 율리우스력의 400년에서 3일(세 번의 윤년)을 뺐다.
          즉, 400년에 97년은 윤년이 되며, 1년은 평균 365.2425일이 된다. 이는
          춘분점을 기준으로 한 태양년보다 0.0003일(26초) 길기 때문에, 약
          3,300년마다 1일의 편차가 난다.
        </p>

        <p>
          그레고리력의 정확한 윤년 규칙을 알고리즘으로 표현하면 다음과 같다.
          <code
            className="block text-sm w-full p-6 rounded-md"
            style={{ backgroundColor: '#fafafa' }}
          >
            <b style={{ color: '#56B6C2' }}>
              <i>if</i>
            </b>{' '}
            (연도 <b style={{ color: '#56B6C2' }}>mod</b>{' '}
            <span style={{ color: '#E06C75' }}>4</span>{' '}
            <span style={{ color: '#56B6C2', fontSize: '1rem' }}>&ne;</span>{' '}
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
            <span style={{ color: '#56B6C2', fontSize: '1rem' }}>&ne;</span>{' '}
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
            <span style={{ color: '#56B6C2', fontSize: '1rem' }}>&ne;</span>{' '}
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
              leap year
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '피타고라스 수 I',
    level: 'Lv. 1',
    url: '/problem/3',
    tags: ['피타고라스'],
    Description: ({ Tex }) => (
      <>
        <p>
          세 자연수 <Tex tex={'a,\\ b,\\ c'} /> 가 피타고라스 정리{' '}
          <Tex tex={'a^2 + b^2 = c^2'} /> 를 만족하면 피타고라스 수라고 부릅니다
          (여기서 <Tex tex={'a \\lt b \\lt c'} /> ).
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
      </>
    ),
    Info: ({ Tex }) => (
      <>
        <p>
          <b>피타고라스 트리플(Pythagorean triple)</b>
        </p>
        <p>
          피타고라스 정리 <Tex tex="a^2 + b^2 = c^2" />을 만족시키는 세 양의
          정수의 튜플 <Tex tex="(a,b,c)" />
          이다. 즉, 유클리드 기하학의 직각 삼각형의 세 변을 이루는 세 양의
          정수의 튜플이다. 예를 들어, <Tex tex="(3,4,5)" />는 피타고라스
          트리플이다. 원시(primitive) 피타고라스 트리플은 피타고라스 트리플을
          이루는 세 수가 서로소인 경우이다.
        </p>
        <p>
          피타고라스 트리플은 항상 <Tex tex="(m^2−n^2,2mn,m^2+n^2)" />{' '}
          <Tex tex="(m>n>0)" /> 꼴이다. 이러한 꼴이 원시 피타고라스 트리플일
          필요 충분 조건은 <Tex tex="m,n" />이 짝수를 포함하는 서로소 정수인
          것이다. 특히, <Tex tex="(m^2−1,2m,m^2+1)" />은 항상 피타고라스
          트리플이다. 여기서 <Tex tex="a = m^2−n^2,b = 2mn,c=m^2+n^2" />
          관계는 피타고라스 트리플을 구하는 프로그래밍에서 매우 유용하게
          사용된다.
        </p>
        <p>
          원시 피타고라스 트리플은 <Tex tex="(3,4,5)" />
          로부터 시작하여 아래 세 행렬을 곱하여 얻어낼 수도 있다.
        </p>
        <Tex
          id="16"
          tex={`
            \\begin{pmatrix}
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
      </>
    ),
  },
  {
    title: '친화수의 합',
    level: 'Lv. 1',
    url: '/problem/4',
    tags: ['친화수'],
    Description: ({ Tex }) => (
      <>
        <p>
          <Tex tex="n" />의 약수들 중에서 자신을 제외한 것의 합을{' '}
          <Tex tex="d(n)" />
          으로 정의했을 때,
        </p>
        <p>
          서로 다른 두 정수 <Tex tex={'a,\\ b'} />에 대하여{' '}
          <Tex
            tex="d(a) =
      b"
          />{' '}
          이고 <Tex tex="d(b) = a" /> 이면
        </p>
        <p className="mb-4">
          <Tex tex="a,\ b" />는 친화쌍이라 하고 <Tex tex="a" />와{' '}
          <Tex tex="b" />를 각각 <u>친화수</u>라고 합니다.
        </p>
        <p>
          예를 들어 220의 약수는 자신을 제외하면 1, 2, 4, 5, 10, 11, 20, 22, 44,
          55, 110 이므로 그 합은 <Tex tex="d(220) = 284" /> 입니다.
        </p>
        <p>
          또 284의 약수는 자신을 제외하면 1, 2, 4, 71, 142 이므로{' '}
          <Tex tex="d(284) = 220" /> 입니다.
        </p>
        <p className="mb-4">따라서 220과 284는 친화쌍이 됩니다.</p>
        <p>10000 이하의 친화수들을 모두 찾아서 그 합을 구하세요.</p>
      </>
    ),
    Info: ({ Tex }) => (
      <>
        <p>
          <b>친화수(amicable numbers)</b>
        </p>
        <p>
          두 수의 쌍이 있어, 어느 한 수의 진약수를 모두 더하면 다른 수가 되는
          것을 말한다. 220과 284의 쌍이 그 예이다. 220의 진약수는 1, 2, 4, 5,
          10, 11, 20, 22, 44, 55, 110로 모두 더하면 284가 된다. 반대로 284의
          모든 진약수 1, 2, 4, 71, 142를 모두 더하면 220이 된다.
        </p>
        <p>
          (220, 284) 다음에 구해진 친화수는 (17296, 18416)이다. 이 친화수는 그
          이전에도 구해져 있었지만, 피에르 드 페르마에 의해 재발견되었다. 그 후,
          레온하르트 오일러에 의해 60개 정도의 친화수가 구해졌다. 1946년에는
          390쌍의 알려진 쌍이 있었지만, 컴퓨터의 발달로 그 이후에 수천 쌍이
          발견되었다. 현재까지 알려진 친화수는 2017년 4월 기준으로, 12억 개
          이상이다.
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
            <a className="hover:opacity-50" href="https://oeis.org/A259180">
              A259180 Amicable pairs
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '피보나치 수열 I',
    level: 'Lv. 1',
    url: '/problem/5',
    tags: ['피보나치', '수열'],
    Description: ({ Tex }) => (
      <>
        <p>
          피보나치 수열 <Tex tex="\{F_n\}" />을 모든 자연수 <Tex tex="n" />에
          대하여 다음과 같이 정의합니다.
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
          <Tex tex="F_n" />을 12번째 항까지 차례대로 구하면 다음과 같습니다.
        </p>
        <p className="ml-8 p-4">
          {[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].map((fib, index) => (
            <Tex key={index} tex={`F_{${index + 1}} = ${fib} \\\\`} />
          ))}
        </p>
        <p className="mb-4">
          이때 수열의 값은 <Tex tex="n = 12" />
          에서 처음으로 3자리가 됩니다.
        </p>
        <p>
          피보나치 수열에서 값이 처음으로 1000자리가 되는 것은 몇번째 항입니까?
        </p>
      </>
    ),
    Info: ({ Tex }) => (
      <>
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
          1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
          2584, 4181, 6765, 10946, ...
        </p>
        <p>피보나치 수의 일반항은 다음과 같다.</p>
        <Tex tex="F_n = {\varphi^n - (1-\varphi)^n \over \sqrt{5} }" block />
        <p>
          여기서 <Tex tex="\varphi" />는 황금비이며, 이 값은 일반적으로 1.618
          정도로 알려져 있다. 이를 비네 공식(Binet's formula)이라고 한다. 이는
          레온하르트 오일러가 1765년 처음 발표했으나 잊혔다가, 1848년 자크
          비네에 의해 재발견되었다.
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
            <a className="hover:opacity-50" href="https://oeis.org/A000045">
              A000045 Fibonacci numbers
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '대칭수의 합',
    level: 'Lv. 1',
    url: '/problem/6',
    tags: ['대칭수'],
    Description: ({ Tex }) => (
      <>
        <p className="mb-4">
          대칭수(palindrome)인 585는 2진수로 나타내도 1001001001
          <sub>2</sub>가 되어 여전히 대칭수입니다.
        </p>
        <p className="mb-4">
          10진법과 2진법으로 모두 대칭수인 1,000,000 미만 수의 합을 구하세요.
        </p>
        <p>(주의: 첫번째 자리가 0이면 대칭수가 아님)</p>
      </>
    ),
    Info: ({ Tex }) => (
      <>
        <p>
          <b>대칭수(palindrome)</b>
        </p>
        <p>
          순서대로 읽은 수와 거꾸로 읽은 수가 같은 수를 말한다. 예를 들어
          34543은 대칭수이고, 34567은 대칭수가 아니다. 대칭수는 유희 수학에서
          주목받는 수이며, 일반적으로 어떤 성질을 가지는 동시에 대칭인 수를
          다룬다. 예로 0, 1, 14641, 104060401, 1004006004001, ...은 네 제곱인
          대칭수이다. 회문수(回文數)라고도 한다.
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
            <a className="hover:opacity-50" href="https://oeis.org/A002113">
              A002113 Palindromes in base 10
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

// ☕
