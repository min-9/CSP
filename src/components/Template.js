'use client';
import Link from 'next/link';
import { useState } from 'react';
import useTex from '@/hooks/tex';
import InputForm from '@/components/InputForm';
import Navigation from '@/components/Navigation';
import { probData } from '@/data/probData';

/**
 * @typedef TemplateProps
 * @prop {number} id
 */

/**
 * @param {TemplateProps} props
 */
export default ({ id }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const Tex = useTex();

  const getState = state => {
    setIsCorrect(state);
  };

  try {
    const { title, Description, Info } = probData[id - 1];

    return (
      <>
        <div className="flex">
          <div className="w-1/2">
            <p className="text-xl">
              <b>{title}</b>
            </p>
            <p className="mb-4">
              <small>Problem {id}</small>
            </p>
          </div>
          <Navigation id={id} length={probData.length} />
        </div>
        <div className="w-full p-6 mb-12" style={{ border: '1px solid gray' }}>
          <Description Tex={Tex} />
        </div>
        <InputForm id={id} type="number" load={getState} />

        <div
          className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
          style={{
            border: '1px solid gray',
            display: isCorrect ? 'flex' : 'none',
          }}
        >
          <Info Tex={Tex} />
        </div>
      </>
    );
  } catch (e) {
    return (
      <main className="w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-black opacity-80 tracking-widest">
          404
        </h1>
        <div
          className="bg-red-800 px-2 text-sm text-white rounded mb-28 mr-3 absolute"
          style={{ transform: 'rotate(12deg)' }}
        >
          Page Not Found
        </div>
        <div className="text-xl mt-14">요청하신 문제를 찾을 수 없습니다</div>
        <Link className="text-lg mt-14 hover:opacity-50" href="/prob_list">
          문제 목록 페이지로
        </Link>
      </main>
    );
  }
};
