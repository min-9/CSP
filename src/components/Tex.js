'use client';
import { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function Tex({ id, tex, block, fontSize }) {
  useEffect(() => {
    katex.render(`\\displaystyle ${tex}`, document.getElementById(id), {
      displayMode: block ?? false,
    });
  }, []);

  return <span id={id} style={{ fontSize: `${fontSize ?? 0.9}em` }}></span>;
}
