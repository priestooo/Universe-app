"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Share,
  MoreHorizontal,
  ShoppingBag,
  Compass,
  Rocket,
  Calendar,
  Brain,
  Radio,
  Camera,
  Pin,
  Heart,
  MessageCircle,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PlanetSettingsModal from "@/components/planet-settings-modal"
import PlanetInsightsModal from "@/components/planet-insights-modal"
import DraftsModal from "@/components/drafts-modal"
import SavedPostsModal from "@/components/saved-posts-modal"
import RepostsModal from "@/components/reposts-modal"

export default function UniverseProfile() {
  const [selectedTab, setSelectedTab] = useState("posts")
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showInsightsModal, setShowInsightsModal] = useState(false)
  const [showDraftsModal, setShowDraftsModal] = useState(false)
  const [showSavedModal, setShowSavedModal] = useState(false)
  const [showRepostsModal, setShowRepostsModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - Responsive Container */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white min-h-screen relative">
        {/* Header Section */}
        <div className="relative">
          {/* Cover Photo Section - Responsive Height */}
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/20 text-white hover:bg-black/30 text-xs sm:text-sm"
            >
              <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Add Cover
            </Button>
          </div>

          {/* Profile Picture with Notifications and Story Add - Responsive Sizing */}
          <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-3 sm:left-4 md:left-6">
            <div className="relative">
              {/* Notification Badge */}
              <Badge className="absolute -top-1 sm:-top-2 -right-0.5 sm:-right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-xs z-10">
                3
              </Badge>

              {/* Profile Picture - Responsive Size */}
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-2 sm:border-3 md:border-4 border-white">
                <AvatarImage src="/placeholder.svg?height=112&width=112" alt="Profile" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>

              {/* Add Story Plus Button - Responsive Size */}
              <Button
                size="sm"
                className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-blue-500 hover:bg-blue-600 p-0"
              >
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>

          {/* Share Profile Button - Responsive Positioning */}
          <Button
            variant="outline"
            size="sm"
            className="absolute top-3 sm:top-4 right-3 sm:right-4 md:right-6 bg-white/90 backdrop-blur-sm text-xs sm:text-sm"
          >
            <Share className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Share Profile
          </Button>
        </div>

        {/* Profile Info - Responsive Padding and Text */}
        <div className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 px-3 sm:px-4 md:px-6 pb-4">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Universe Creator</h1>
            <p className="text-sm sm:text-base text-gray-600">@universecreator</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              ✨ Welcome to my Universe ✨<br />
              Creating amazing content daily 🚀
            </p>

            <div className="flex gap-3 sm:gap-4 md:gap-6 mt-3 text-xs sm:text-sm md:text-base">
              <span>
                <strong>1.2M</strong> followers
              </span>
              <span>
                <strong>500</strong> following
              </span>
              <span>
                <strong>2.5M</strong> likes
              </span>
            </div>
          </div>

          {/* Highlights Section - Responsive Sizing */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
              {/* Add Highlight Button */}
              <div className="flex flex-col items-center min-w-fit">
                <Button
                  variant="outline"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-dashed border-gray-300 p-0 bg-transparent"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                </Button>
                <span className="text-xs mt-1 text-gray-500">New</span>
              </div>

              {/* Highlight Stories */}
              {["Travel", "Food", "Art", "Music"].map((highlight, index) => (
                <div key={index} className="flex flex-col items-center min-w-fit">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <Avatar className="w-full h-full">
                        <AvatarImage src={`/placeholder.svg?height=72&width=72&query=${highlight}`} alt={highlight} />
                        <AvatarFallback>{highlight[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <span className="text-xs mt-1">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Section - TikTok/Instagram Style Grid */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">Pinned Posts</h2>

            {/* Posts Grid - Responsive Grid Layout */}
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1 md:gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => (
                <div key={post} className="relative aspect-square group cursor-pointer">
                  {/* Pin Icon for First 4 Posts */}
                  {post <= 4 && (
                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2 z-10">
                      <Pin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current drop-shadow-lg" />
                    </div>
                  )}

                  {/* Post Image */}
                  <div className="relative w-full h-full overflow-hidden rounded-sm sm:rounded-md">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&query=universe post ${post}`}
                      alt={`Post ${post}`}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 fill-current" />
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          <span>{(post * 1234).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{post * 12}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Options Button - Responsive Positioning */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="fixed top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-black/30 z-20"
              variant="ghost"
            >
              <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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

            <Link href="/inbox">
              <Button variant="ghost" className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 relative">
                {/* Notification Badge */}
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs z-10">
                  5
                </Badge>
                <Radio className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs">INBOX</span>
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
