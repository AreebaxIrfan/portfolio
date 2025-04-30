"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Bot, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Areeba's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""

      const lowerCaseInput = inputValue.toLowerCase()

      if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        botResponse = "Hello! How can I assist you today?"
      } else if (lowerCaseInput.includes("contact") || lowerCaseInput.includes("email")) {
        botResponse = "You can reach Areeba at areeba.irfan@example.com or schedule a meeting through this chat."
      } else if (
        lowerCaseInput.includes("meeting") ||
        lowerCaseInput.includes("schedule") ||
        lowerCaseInput.includes("call")
      ) {
        botResponse =
          "I'd be happy to schedule a meeting! Please let me know your preferred date, time, and the topic you'd like to discuss."
      } else if (lowerCaseInput.includes("project") || lowerCaseInput.includes("work")) {
        botResponse =
          "Areeba has worked on over 40 projects! Is there a specific type of project you're interested in learning more about?"
      } else if (lowerCaseInput.includes("hire") || lowerCaseInput.includes("job")) {
        botResponse =
          "Great! Areeba is currently available for hire. Could you share some details about the opportunity you have in mind?"
      } else {
        botResponse =
          "Thanks for your message! Areeba will get back to you soon. Is there anything specific you'd like to know about her work or experience?"
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Button
          id="chat-button"
          size="icon"
          className="rounded-full bg-teal-400 hover:bg-teal-500 h-12 w-12 shadow-lg"
          onClick={toggleChat}
        >
          <Bot className="h-6 w-6" />
          <span className="sr-only">Chat with me</span>
        </Button>

        {/* Chat Container */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden`}
        >
          <div className="p-4 bg-teal-400 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with me</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-teal-500 rounded-full"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="h-64 overflow-y-auto p-4 bg-gray-50">
            <div className="flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.isBot
                      ? "bg-teal-50 rounded-lg rounded-tl-none max-w-[80%] self-start"
                      : "bg-gray-100 rounded-lg rounded-tr-none max-w-[80%] self-end"
                  } p-3`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                size="icon"
                className="h-10 w-10 bg-teal-400 hover:bg-teal-500 rounded-md"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
