import { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function Tex({ id, tex, displayBlock, fontSize }) {
  useEffect(() => {
    katex.render(`\\displaystyle ${tex}`, document.getElementById(id), {
      displayMode: displayBlock ?? false,
    });
  }, []);

  return <span id={id} style={{ fontSize: `${fontSize ?? 0.9}em` }}></span>;
}
