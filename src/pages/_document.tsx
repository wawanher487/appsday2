import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head /> {/* disini kita bisa setup google analitycs, bosstrap dan lain lain */}

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
