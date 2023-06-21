import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='selection:text-white selection:bg-purple-400'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
