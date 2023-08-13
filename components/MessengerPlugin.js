"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

const MessengerPlugin = () => {

  return (
    <FacebookProvider appId="836966761045140" chatSupport>
      <CustomChat pageId="101348906341916" minimized={true} />
    </FacebookProvider>
  )
}

export default MessengerPlugin
