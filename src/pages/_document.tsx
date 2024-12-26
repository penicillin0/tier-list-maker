import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" />

        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="google-site-verification"
          content="7Ghxx-EskqMs_Kj71i1-f-u0-p92v-SEodaYYx1Njyo"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
