import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/x-icon" href="/code_verse_transparent.png" />
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
        ></Script>

        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v17.0'
            });
      };

          (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script> */}
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
