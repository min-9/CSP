'use client';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

/**
 * @typedef InputProps
 * @prop {number} id
 * @prop {string} type
 * @prop {(state: boolean) => void} load
 */

/**
 * @typedef State
 * @prop {boolean} isCorrect
 */

/**
 * @typedef ResponseProps
 * @prop {boolean} returnValue
 */

/**
 * @param {InputProps} props
 * @returns
 */
export default function InputForm({ id, type, load }) {
  const inputRef = useRef(null);

  const [input, setInput] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [disable, setDisable] = useState('opacity-50 cursor-not-allowed');
  const [isDisable, setIsDisable] = useState(true);

  const router = useRouter();

  const callAPI = async () => {
    const response = await fetch('/api/prob', {
      method: 'POST',
      body: JSON.stringify({
        id,
        input: +inputRef.current.value,
      }),
    });

    /** @type {ResponseProps} */
    const { returnValue } = await response.json();

    load(returnValue);

    if (returnValue) {
      setInput(+inputRef.current.value);
      setIsCorrect(prev => !prev);
    } else {
      router.push(`/submit_answer/${id}?input=${+inputRef.current.value}`);
    }
  };

  return (
    <div className="flex w-full justify-center flex-col">
      <div className="flex justify-center">
        <label className="flex items-center mr-2 text-xl">
          정답: <b className="ml-1">{input ?? ''}</b>
        </label>
        <input
          className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type={type ?? 'text'}
          ref={inputRef}
          onChange={e => {
            if (!e.target.value) {
              setIsDisable(true);
              setDisable('opacity-50 cursor-not-allowed');
            } else {
              setIsDisable(false);
              setDisable('hover:bg-blue-600');
            }
          }}
          style={{
            display: isCorrect ? 'none' : 'flex',
          }}
        />
      </div>
      <button
        className={`flex mx-auto mt-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg ${disable}`}
        onClick={callAPI}
        style={{
          display: isCorrect ? 'none' : 'flex',
        }}
        disabled={isDisable}
      >
        답안 제출
      </button>
    </div>
  );
}
