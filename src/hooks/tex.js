import Tex from '@/components/Tex';

/**
 * @typedef TexProps
 * @prop {number} id
 * @prop {string} tex
 * @prop {boolean} block
 * @prop {number} fontSize
 */

/**
 * __React custom hook for TeX.__
 *
 * Auto increment `id` so cool.
 *
 * Just do focus on `TeX` syntax.
 *
 * Usage:
 * ```tsx
 * import { FC } from 'react';
 * export default function Page(props: Props): FC<Props> {
 *   const Tex = useTex()
 *   return (
 *     // some components
 *     <Tex tex={`...`} />
 *   );
 * }
 * ```
 * @returns {(props: TexProps) => JSX.Element}
 */
export default function useTex() {
  let id = 1;
  return props => {
    return <Tex id={id++} {...props} />;
  };
}
