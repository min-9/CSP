'use client';
import { useState } from 'react';
import useTex from '@/hooks/tex';
import InputForm from '@/components/InputForm';
import Template from '@/components/Template';

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
            {/* <Template  /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
