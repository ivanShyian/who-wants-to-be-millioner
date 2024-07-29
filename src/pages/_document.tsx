import { NextPage } from 'next';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document: NextPage = function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
