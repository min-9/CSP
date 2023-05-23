import Script from 'next/script';
import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PSCode',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script type="text/x-mathjax-config">
          {typeof window !== 'undefined' &&
            window.MathJax.Hub.Config({
              jax: ['input/TeX', 'output/HTML-CSS'],
              tex2jax: {
                inlineMath: [
                  ['$', '$'],
                  ['\\(', '\\)'],
                ],
                displayMath: [
                  ['$$', '$$'],
                  ['\\[', '\\]'],
                ],
                processEscapes: true,
              },
              'HTML-CSS': { availableFonts: ['TeX'] },
            })}
        </Script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML-full,Safe"
        ></script>
        <Header />
        {children}
      </body>
    </html>
  );
}