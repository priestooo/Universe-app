"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Repeat2, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function RepostsModal({ onClose }: { onClose: () => void }) {
  const reposts = [
    {
      id: 1,
      reposter: { username: "galaxy_explorer", displayName: "Galaxy Explorer" },
      originalPost: {
        id: 101,
        username: "cosmic_creator",
        description: "Exploring the mysteries of the universe! 🌌✨",
        likes: "1.2M",
        comments: "30K",
        query: "original post 101",
      },
      repostTime: "2h ago",
    },
    {
      id: 2,
      reposter: { username: "star_gazer", displayName: "Star Gazer" },
      originalPost: {
        id: 102,
        username: "nebula_dreams",
        description: "When you realize how small we are in this vast universe 🤯🌟",
        likes: "800K",
        comments: "20K",
        query: "original post 102",
      },
      repostTime: "5h ago",
    },
    {
      id: 3,
      reposter: { username: "space_artist", displayName: "Space Artist" },
      originalPost: {
        id: 103,
        username: "universe_lover",
        description: "Dancing through the galaxies! Who else loves space content? 🚀💫",
        likes: "2.5M",
        comments: "50K",
        query: "original post 103",
      },
      repostTime: "1d ago",
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-lg font-semibold">Reposts</h2>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </div>

      {/* Reposts List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {reposts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-lg">No reposts yet.</p>
            <p className="text-sm">Repost content to see it here!</p>
          </div>
        ) : (
          reposts.map((repost) => (
            <div key={repost.id} className="border rounded-lg p-3 sm:p-4 bg-gray-50">
              {/* Reposter Info */}
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&query=${repost.reposter.username}`}
                    alt={repost.reposter.displayName}
                  />
                  <AvatarFallback>{repost.reposter.displayName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{repost.reposter.displayName}</p>
                  <p className="text-xs text-gray-500">reposted {repost.repostTime}</p>
                </div>
              </div>

              {/* Original Post Preview */}
              <div className="flex items-start gap-3 bg-white p-2 rounded-md border border-gray-200">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&query=${repost.originalPost.query}`}
                    alt="Original Post"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">@{repost.originalPost.username}</p>
                  <p className="text-xs text-gray-700 line-clamp-2 mb-1">{repost.originalPost.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3 fill-current" /> {repost.originalPost.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> {repost.originalPost.comments}
                    </div>
                  </div>
                </div>
              </div>

              {/* Repost Action Button */}
              <Button variant="outline" className="w-full mt-3 text-sm sm:text-base bg-transparent">
                <Repeat2 className="h-4 w-4 mr-2" /> View Repost
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
