"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ChevronDown,
  Radio,
  Heart,
  MessageCircle,
  Bookmark,
  ShoppingBag,
  Compass,
  Rocket,
  Calendar,
  Brain,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Zap,
  Camera,
  Mic,
  Smile,
} from "lucide-react"
import Link from "next/link"

export default function ExploreUniverse() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showComments, setShowComments] = useState(false)

  // Effect to control body and html scroll when comments modal is open
  useEffect(() => {
    if (showComments) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden" // Also target html element
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
    // Cleanup function to reset overflow when component unmounts or showComments changes
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [showComments])

  // Demo posts data (original 4 posts)
  const posts = [
    {
      id: 1,
      username: "cosmic_creator",
      description: "Exploring the mysteries of the universe! 🌌✨ #universe #space #cosmic",
      likes: "2.1M",
      comments: "45.2K",
      shares: "12.8K",
      music: "Original Sound - cosmic_creator",
    },
    {
      id: 2,
      username: "star_gazer",
      description: "When you realize how small we are in this vast universe 🤯🌟 #mindblown #astronomy",
      likes: "1.8M",
      comments: "32.1K",
      shares: "9.5K",
      music: "Interstellar Theme - Hans Zimmer",
    },
    {
      id: 3,
      username: "galaxy_explorer",
      description: "Dancing through the galaxies! Who else loves space content? 🚀💫 #spacedance #universe",
      likes: "3.2M",
      comments: "67.8K",
      shares: "18.3K",
      music: "Space Vibes - DJ Cosmos",
    },
    {
      id: 4,
      username: "nebula_dreams",
      description: "Creating art inspired by nebulas and distant worlds 🎨🌌 #spaceart #creative",
      likes: "956K",
      comments: "23.4K",
      shares: "7.2K",
      music: "Ambient Space - Stellar Sounds",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Top Header - Responsive */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
          {/* Search Icon */}
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Live Icon - Center */}
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <span className="text-sm sm:text-base font-semibold">LIVE</span>
          </div>

          {/* Explore Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-semibold">Explore</span>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content - Full Screen Video Feed */}
      <div className="pt-12 sm:pt-16 pb-16 sm:pb-20">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="relative w-full h-screen flex items-center justify-center"
            style={{ height: "calc(100vh - 7rem)" }}
          >
            {/* Background Video/Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={`/placeholder.svg?height=800&width=450&query=universe video ${post.id}`}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:text-white hover:bg-black/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 sm:w-10 sm:h-10" />
                  ) : (
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
                  )}
                </Button>
              </div>
            </div>

            {/* Left Side Action Icons (TikTok Style but on Left) */}
            <div className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-20">
              {/* Like Button */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/20 backdrop-blur-sm"
                >
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
                <span className="text-xs sm:text-sm mt-1 font-semibold">{post.likes}</span>
              </div>

              {/* Comment Button */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/20 backdrop-blur-sm"
                  onClick={() => setShowComments(true)}
                >
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
                <span className="text-xs sm:text-sm mt-1 font-semibold">{post.comments}</span>
              </div>

              {/* Share Button - Now Shooting Star */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/20 backdrop-blur-sm"
                >
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
                <span className="text-xs sm:text-sm mt-1 font-semibold">{post.shares}</span>
              </div>

              {/* Bookmark Button */}
              <div className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/20 backdrop-blur-sm"
                >
                  <Bookmark className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
              </div>
            </div>

            {/* Volume Control - Only shows when paused */}
            {!isPlaying && (
              <div className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/20 backdrop-blur-sm"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 sm:w-7 sm:h-7" />
                  ) : (
                    <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  )}
                </Button>
              </div>
            )}

            {/* Right Side Content Info - Moved from bottom */}
            <div className="absolute right-2 sm:right-4 md:right-6 bottom-4 sm:bottom-6 z-20 max-w-xs sm:max-w-sm">
              <div className="text-right mb-3">
                <div className="flex items-center justify-end gap-3 mb-2">
                  <div className="text-right">
                    <p className="font-semibold text-sm sm:text-base">@{post.username}</p>
                  </div>
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white">
                    <AvatarImage
                      src={`/placeholder.svg?height=48&width=48&query=${post.username}`}
                      alt={post.username}
                    />
                    <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black text-xs sm:text-sm"
                  >
                    Follow
                  </Button>
                </div>

                <p className="text-sm sm:text-base mb-2 leading-relaxed text-right">{post.description}</p>

                <div className="flex items-center justify-end gap-2 text-xs sm:text-sm text-white/80">
                  <span className="truncate">{post.music}</span>
                  <span>♪</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comments Modal */}
      {showComments && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl max-h-[80vh] overflow-hidden">
            <CommentsSection onClose={() => setShowComments(false)} />
          </div>
        </div>
      )}

      {/* Bottom Navigation - Responsive (Conditionally Hidden) */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-2 sm:px-4 py-1 sm:py-2 z-50 transition-transform duration-300 ${
          showComments ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs">Shop</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-xs text-blue-400 hidden sm:inline">Explore Universe</span>
            <span className="text-xs text-blue-400 sm:hidden">Explore</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10"
          >
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs">EVENTS</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10"
          >
            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs">A.I</span>
          </Button>

          <Link href="/inbox">
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-0.5 sm:gap-1 p-1 sm:p-2 text-white hover:bg-white/10 relative"
            >
              {/* Notification Badge */}
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs z-10">
                5
              </Badge>
              <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Profile" />
                <AvatarFallback className="text-xs">U</AvatarFallback>
              </Avatar>
              <span className="text-xs">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Comments Section Component
function CommentsSection({ onClose }: { onClose: () => void }) {
  const [newComment, setNewComment] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const comments = [
    {
      id: 1,
      username: "star_gazer",
      displayName: "Star Gazer",
      comment: "This is absolutely incredible! 🌟",
      time: "2h",
      likes: 234,
      replies: 12,
    },
    {
      id: 2,
      username: "cosmic_creator",
      displayName: "Cosmic Creator",
      comment: "The universe never ceases to amaze me ✨",
      time: "1h",
      likes: 156,
      replies: 8,
    },
    {
      id: 3,
      username: "galaxy_explorer",
      displayName: "Galaxy Explorer",
      comment: "I could watch this all day! Amazing work 🚀",
      time: "45m",
      likes: 89,
      replies: 3,
    },
    {
      id: 4,
      username: "nebula_dreams",
      displayName: "Nebula Dreams",
      comment: "This gives me so much inspiration for my art 🎨",
      time: "30m",
      likes: 67,
      replies: 5,
    },
    {
      id: 5,
      username: "space_artist",
      displayName: "Space Artist",
      comment: "The colors are just perfect! How did you capture this?",
      time: "15m",
      likes: 45,
      replies: 2,
    },
    {
      id: 6,
      username: "moon_walker",
      displayName: "Moon Walker",
      comment: "Absolutely stunning visuals! Keep up the great work.",
      time: "10m",
      likes: 78,
      replies: 4,
    },
    {
      id: 7,
      username: "comet_chaser",
      displayName: "Comet Chaser",
      comment: "Mind-blowing! This is why I love exploring the universe.",
      time: "8m",
      likes: 102,
      replies: 6,
    },
    {
      id: 8,
      username: "astro_photog",
      displayName: "Astro Photog",
      comment: "What camera settings did you use for this shot?",
      time: "5m",
      likes: 30,
      replies: 1,
    },
    {
      id: 9,
      username: "deep_space_fan",
      displayName: "Deep Space Fan",
      comment: "Can't wait to see more of your cosmic adventures!",
      time: "3m",
      likes: 55,
      replies: 0,
    },
    {
      id: 10,
      username: "universe_lover",
      displayName: "Universe Lover",
      comment: "This is my new favorite post! So inspiring.",
      time: "1m",
      likes: 99,
      replies: 7,
    },
  ]

  const handleSendComment = () => {
    if (newComment.trim()) {
      // Add comment logic here
      console.log("Sending comment:", newComment)
      setNewComment("")
    }
  }

  const handleVoiceNote = () => {
    setIsRecording(!isRecording)
    // Voice recording logic here
    console.log("Voice note recording:", !isRecording)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Comments</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 p-2">
          ✕
        </Button>
      </div>

      {/* Comment Input Section - TikTok Style (MOVED TO TOP) */}
      <div className="border-b border-gray-200 p-2 sm:p-3 bg-white">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* User Avatar */}
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          {/* Input Container */}
          <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
            {/* Text Input */}
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder-gray-500"
              onKeyPress={(e) => e.key === "Enter" && handleSendComment()}
            />

            {/* Action Icons */}
            <div className="flex items-center gap-1 sm:gap-2 ml-2">
              {/* Emoji Icon */}
              <Button
                variant="ghost"
                size="sm"
                className="p-1 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full"
              >
                <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              {/* Camera/Photo Icon */}
              <Button
                variant="ghost"
                size="sm"
                className="p-1 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full"
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              {/* Voice Note Icon */}
              <Button
                variant="ghost"
                size="sm"
                className={`p-1 sm:p-2 rounded-full transition-colors ${
                  isRecording
                    ? "text-red-500 bg-red-50 hover:bg-red-100"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
                }`}
                onClick={handleVoiceNote}
              >
                <Mic className={`w-4 h-4 sm:w-5 sm:h-5 ${isRecording ? "animate-pulse" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Send Button */}
          {newComment.trim() ? (
            <Button
              onClick={handleSendComment}
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-sm sm:text-base"
            >
              Post
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="p-2 sm:p-3 text-gray-400 cursor-not-allowed" disabled>
              Post
            </Button>
          )}
        </div>

        {/* Recording Indicator */}
        {isRecording && (
          <div className="flex items-center justify-center gap-2 mt-2 p-1.5 bg-red-50 rounded-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-red-600 font-medium">Recording voice note...</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVoiceNote}
              className="text-red-600 hover:bg-red-100 text-xs px-2 py-1 rounded"
            >
              Stop
            </Button>
          </div>
        )}
      </div>

      {/* Comments List - This is the scrollable area */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-2 sm:gap-3">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <AvatarImage
                src={`/placeholder.svg?height=40&width=40&query=${comment.username}`}
                alt={comment.username}
              />
              <AvatarFallback>{comment.displayName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-gray-900">{comment.displayName}</span>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-800 mb-2">{comment.comment}</p>
              <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500">
                <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                  <Heart className="w-3 h-3" />
                  <span>{comment.likes}</span>
                </button>
                <button className="hover:text-gray-700 transition-colors">Reply</button>
                {comment.replies > 0 && (
                  <button className="hover:text-gray-700 transition-colors">View {comment.replies} replies</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
