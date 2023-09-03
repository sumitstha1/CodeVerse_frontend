import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LF4E49299R"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-LF4E49299R');
            `,
          }}
          />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body className='selection:text-white selection:bg-purple-400'>
        {/* <div id="fb-root"></div>

        <div id="fb-customer-chat" class="fb-customerchat">
        </div>

        <Script
          id="messenger-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "101348906341916");
            chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        ></Script> */}

        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
