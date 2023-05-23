import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" async />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
