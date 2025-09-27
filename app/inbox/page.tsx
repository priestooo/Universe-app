"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, ShoppingBag, Compass, Rocket, Calendar, Brain, Heart, UserPlus, Eye, AtSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PlanetSettingsModal from "@/components/planet-settings-modal"
import PlanetInsightsModal from "@/components/planet-insights-modal"
import DraftsModal from "@/components/drafts-modal"
import SavedPostsModal from "@/components/saved-posts-modal"
import RepostsModal from "@/components/reposts-modal"

export default function InboxPage() {
  // Demo data for stories
  const stories = [
    { id: 1, username: "cosmic_creator", hasStory: true },
    { id: 2, username: "star_gazer", hasStory: true },
    { id: 3, username: "galaxy_explorer", hasStory: true },
    { id: 4, username: "nebula_dreams", hasStory: true },
    { id: 5, username: "space_artist", hasStory: true },
  ]

  // Demo data for notifications
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "cosmic_creator",
      message: "liked your post",
      time: "2m",
      icon: Heart,
      color: "text-red-500",
    },
    {
      id: 2,
      type: "follow",
      user: "star_gazer",
      message: "started following you",
      time: "5m",
      icon: UserPlus,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "view",
      user: "galaxy_explorer",
      message: "viewed your profile",
      time: "10m",
      icon: Eye,
      color: "text-green-500",
    },
    {
      id: 4,
      type: "tag",
      user: "nebula_dreams",
      message: "tagged you in a post",
      time: "15m",
      icon: AtSign,
      color: "text-purple-500",
    },
  ]

  // Demo data for chats
  const chats = [
    {
      id: 1,
      username: "cosmic_creator",
      displayName: "Cosmic Creator",
      lastMessage: "Hey! Did you see my latest universe post? 🌌",
      time: "2m",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      username: "star_gazer",
      displayName: "Star Gazer",
      lastMessage: "That nebula photo was amazing! 🤩",
      time: "1h",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      username: "galaxy_explorer",
      displayName: "Galaxy Explorer",
      lastMessage: "Want to collaborate on a space project?",
      time: "3h",
      unread: 1,
      online: false,
    },
    {
      id: 4,
      username: "nebula_dreams",
      displayName: "Nebula Dreams",
      lastMessage: "Thanks for the follow! ✨",
      time: "5h",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      username: "space_artist",
      displayName: "Space Artist",
      lastMessage: "Your art style is incredible 🎨",
      time: "1d",
      unread: 0,
      online: true,
    },
    {
      id: 6,
      username: "moon_walker",
      displayName: "Moon Walker",
      lastMessage: "Let's plan that moon observation session",
      time: "2d",
      unread: 0,
      online: false,
    },
    {
      id: 7,
      username: "comet_chaser",
      displayName: "Comet Chaser",
      lastMessage: "The meteor shower was spectacular! 🌠",
      time: "3d",
      unread: 0,
      online: false,
    },
  ]

  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showInsightsModal, setShowInsightsModal] = useState(false)
  const [showDraftsModal, setShowDraftsModal] = useState(false)
  const [showSavedModal, setShowSavedModal] = useState(false)
  const [showRepostsModal, setShowRepostsModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - Responsive Container */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white min-h-screen relative">
        {/* Top Header - Responsive */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Add Group Icon */}
            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            {/* Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Inbox</h1>

            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>

        {/* Stories Section - Responsive */}
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
            {/* Add Story Button */}
            <div className="flex flex-col items-center min-w-fit">
              <Button
                variant="outline"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-gray-300 p-0 bg-transparent hover:bg-gray-50"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
              </Button>
              <span className="text-xs mt-1 text-gray-500">Your story</span>
            </div>

            {/* Friend Stories */}
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center min-w-fit">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        src={`/placeholder.svg?height=64&width=64&query=${story.username}`}
                        alt={story.username}
                      />
                      <AvatarFallback>{story.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <span className="text-xs mt-1 truncate max-w-16">{story.username}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Section - Responsive */}
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg font-semibold">Notifications</h2>
            <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50 text-xs sm:text-sm">
              See all
            </Button>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {notifications.slice(0, 3).map((notification) => {
              const IconComponent = notification.icon
              return (
                <div
                  key={notification.id}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48&query=${notification.user}`}
                        alt={notification.user}
                      />
                      <AvatarFallback>{notification.user[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center border-2 border-white`}
                    >
                      <IconComponent className={`w-3 h-3 sm:w-4 sm:h-4 ${notification.color}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base">
                      <span className="font-semibold">{notification.user}</span>{" "}
                      <span className="text-gray-600">{notification.message}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{notification.time} ago</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Chat List Section - Responsive */}
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-semibold">Messages</h2>
            <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50 text-xs sm:text-sm">
              See all
            </Button>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {chats.map((chat) => (
              <Link key={chat.id} href={`/chat/${chat.username}`}>
                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <div className="relative">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                      <AvatarImage
                        src={`/placeholder.svg?height=64&width=64&query=${chat.username}`}
                        alt={chat.username}
                      />
                      <AvatarFallback>{chat.displayName[0]}</AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{chat.displayName}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-500">{chat.time}</span>
                        {chat.unread > 0 && (
                          <Badge className="bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Floating A.I Button - Updated */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="fixed top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg z-20"
              variant="default"
            >
              <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 sm:w-56 z-30">
            <DropdownMenuItem onClick={() => setShowSettingsModal(true)}>Planet Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowInsightsModal(true)}>Planet Insights</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowDraftsModal(true)}>Drafts</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowSavedModal(true)}>Saved</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowRepostsModal(true)}>Reposts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bottom Navigation - Responsive */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-white border-t border-gray-200 px-2 sm:px-4 py-1 sm:py-2">
          <div className="flex justify-between items-center">
            <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs">Shop</span>
            </Button>

            <Link href="/explore">
              <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs hidden sm:inline">Explore Universe</span>
                <span className="text-xs sm:hidden">Explore</span>
              </Button>
            </Link>

            <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs">EVENTS</span>
            </Button>

            <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs">A.I</span>
            </Button>

            <Link href="/">
              <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 relative">
                {/* Notification Badge */}
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs z-10">
                  5
                </Badge>
                <Avatar className="w-4 h-4 sm:w-5 sm:h-5">
                  <AvatarImage src="/placeholder.svg?height=20&width=20" alt="Profile" />
                  <AvatarFallback className="text-xs">U</AvatarFallback>
                </Avatar>
                <span className="text-xs">Profile</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Padding for Navigation - Responsive */}
        <div className="h-16 sm:h-20"></div>
      </div>
      {showSettingsModal && <PlanetSettingsModal onClose={() => setShowSettingsModal(false)} />}
      {showInsightsModal && <PlanetInsightsModal onClose={() => setShowInsightsModal(false)} />}
      {showDraftsModal && <DraftsModal onClose={() => setShowDraftsModal(false)} />}
      {showSavedModal && <SavedPostsModal onClose={() => setShowSavedModal(false)} />}
      {showRepostsModal && <RepostsModal onClose={() => setShowRepostsModal(false)} />}
    </div>
  )
}
