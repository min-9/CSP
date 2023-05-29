'use client';
import { useState } from 'react';
import useTex from '@/hooks/tex';
import InputForm from '@/components/InputForm';
import Navigation from '@/components/Navigation';
import Error from '@/components/error/Error';
import { probData } from '@/data/prob';

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

  const props = {
    style: {
      ul: 'ml-12 list-disc list-outside',
    },
    Tex,
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
          <Description {...props} />
        </div>
        <InputForm id={id} type="number" load={getState} />
        <div
          className="flex justify-center w-full flex-col p-6 mt-10 gap-4"
          style={{
            border: '1px solid gray',
            display: isCorrect ? 'flex' : 'none',
          }}
        >
          <Info {...props} />
        </div>
      </>
    );
  } catch (e) {
    return <Error />;
  }
};
