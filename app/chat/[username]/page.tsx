"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Send,
  Smile,
  Paperclip,
  Camera,
  Mic,
  BellOff,
  Pin,
  UserX,
  Flag,
  Trash2,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ChatPage() {
  const params = useParams()
  const username = params.username as string
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Did you see my latest universe post? 🌌",
      sender: "other",
      time: "10:30 AM",
      status: "read",
    },
    {
      id: 2,
      text: "Yes! It was absolutely amazing! The colors were incredible 🤩",
      sender: "me",
      time: "10:32 AM",
      status: "read",
    },
    {
      id: 3,
      text: "Thank you! I spent hours capturing that nebula shot",
      sender: "other",
      time: "10:33 AM",
      status: "read",
    },
    {
      id: 4,
      text: "Your dedication really shows in your work ✨",
      sender: "me",
      time: "10:35 AM",
      status: "read",
    },
    {
      id: 5,
      text: "Want to collaborate on a space photography project?",
      sender: "other",
      time: "10:40 AM",
      status: "delivered",
    },
    {
      id: 6,
      text: "That sounds fantastic! I'd love to work together 🚀",
      sender: "me",
      time: "10:42 AM",
      status: "sent",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "me" as const,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "sent" as const,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Get user display name from username
  const getDisplayName = (username: string) => {
    const names: { [key: string]: string } = {
      cosmic_creator: "Cosmic Creator",
      star_gazer: "Star Gazer",
      galaxy_explorer: "Galaxy Explorer",
      nebula_dreams: "Nebula Dreams",
      space_artist: "Space Artist",
      moon_walker: "Moon Walker",
      comet_chaser: "Comet Chaser",
    }
    return names[username] || username
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Chat Header - Responsive */}
      <div className="bg-white border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          {/* Back Button */}
          <Link href="/inbox">
            <Button variant="ghost" size="sm" className="p-1 sm:p-2">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </Link>

          {/* User Info */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="relative">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <AvatarImage src={`/placeholder.svg?height=48&width=48&query=${username}`} alt={username} />
                <AvatarFallback>{getDisplayName(username)[0]}</AvatarFallback>
              </Avatar>
              {/* Online Status */}
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 border border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-sm sm:text-base md:text-lg truncate">{getDisplayName(username)}</h2>
              <p className="text-xs sm:text-sm text-green-500">Online</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Video Call */}
          <Button variant="ghost" size="sm" className="p-2">
            <Video className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </Button>

          {/* Audio Call */}
          <Button variant="ghost" size="sm" className="p-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </Button>

          {/* Options Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 sm:w-56">
              <DropdownMenuItem className="flex items-center gap-2 sm:gap-3">
                <Pin className="w-4 h-4" />
                <span className="text-sm">Pin to top</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 sm:gap-3">
                <BellOff className="w-4 h-4" />
                <span className="text-sm">Mute notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 sm:gap-3">
                <UserX className="w-4 h-4" />
                <span className="text-sm">Block user</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 sm:gap-3">
                <Flag className="w-4 h-4" />
                <span className="text-sm">Report</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 sm:gap-3 text-red-600">
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Delete chat</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Messages Container - Responsive */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white rounded-br-md"
                  : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
              }`}
            >
              <p className="text-sm sm:text-base break-words">{msg.text}</p>
              <div
                className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                  msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                <span>{msg.time}</span>
                {msg.sender === "me" && (
                  <div className="flex">
                    {msg.status === "sent" && <span>✓</span>}
                    {msg.status === "delivered" && <span>✓✓</span>}
                    {msg.status === "read" && <span className="text-blue-200">✓✓</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input - Responsive */}
      <div className="bg-white border-t border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Attachment Button */}
          <Button variant="ghost" size="sm" className="p-2 text-gray-500">
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* Camera Button */}
          <Button variant="ghost" size="sm" className="p-2 text-gray-500">
            <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="pr-10 sm:pr-12 rounded-full border-gray-300 focus:border-blue-500 text-sm sm:text-base"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 text-gray-500"
            >
              <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Send/Mic Button */}
          {message.trim() ? (
            <Button onClick={sendMessage} size="sm" className="p-2 sm:p-3 bg-blue-500 hover:bg-blue-600 rounded-full">
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="p-2 sm:p-3 text-gray-500">
              <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Floating A.I Button */}
      <Button
        className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 md:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg z-20"
        variant="default"
      >
        <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </Button>
    </div>
  )
}
