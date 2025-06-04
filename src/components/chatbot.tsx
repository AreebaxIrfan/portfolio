'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className=" bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-full p-4 shadow-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chatbot Drawer */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 sm:w-96">
          <iframe
            src="https://areebairfan-3f639.up.railway.app/" // Replace with your Chainlit server URL
            title="Areeba Irfan"
            className="w-full h-full border-none"
            allow="microphone; camera"
          />
        </div>
      )}
    </div>
  );
}