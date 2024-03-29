import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="font-lato tracking-wide bg-[#73C2FB]">
      {/* Default background color = bg-[#292B32] */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
