import { useState } from 'react';

import Form from './chat/Form';
import Head from './chat/Head';
import Messages from './chat/Messages';
// import imageToAdd from '.../AISHA.png';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="bg-[#00416A] rounded-3xl p-12">
      {/* Default Background Color = bg-[#2F343C] */}      
      <Head />
      <div className="w-full h-[1px] my-8 bg-[#1da1f2]" />
      {/* Default Background Color = bg-[#4F5361] */}
      <Messages messages={messages} />
      <div className="w-full h-[1px] my-8 bg-[#1da1f2]" />
      {/* Default Background Color = bg-[#4F5361] */}
      <Form setMessages={setMessages} />
    </div>
  );
}
