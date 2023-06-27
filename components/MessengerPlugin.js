import React, { useEffect } from 'react'

const MessengerPlugin = () => {
    useEffect(() => {
        // Add the Messenger Plugin code
        const script = document.createElement('script');
        script.innerHTML = `<div id="fb-root"></div>

        <div id="fb-customer-chat" class="fb-customerchat"></div>
    
        <script>
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "PAGE-ID");
          chatbox.setAttribute("attribution", "biz_inbox");
        </script>
    
    
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'API-VERSION'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        </script>`;
        document.body.appendChild(script);
    
        // Clean up on unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <>
    <div></div>


    </>
  )
}

export default MessengerPlugin
