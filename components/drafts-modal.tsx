"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, EyeOff, Eye, Play } from "lucide-react"
import Image from "next/image"

export default function DraftsModal({ onClose }: { onClose: () => void }) {
  const [showHidden, setShowHidden] = useState(false)

  const drafts = [
    { id: 1, type: "video", status: "draft", query: "draft video 1" },
    { id: 2, type: "image", status: "draft", query: "draft image 2" },
    { id: 3, type: "video", status: "draft", query: "draft video 3" },
    { id: 4, type: "image", status: "draft", query: "draft image 4" },
    { id: 5, type: "video", status: "draft", query: "draft video 5" },
    { id: 6, type: "image", status: "draft", query: "draft image 6" },
  ]

  const hiddenPosts = [
    { id: 7, type: "video", status: "hidden", query: "hidden video 7" },
    { id: 8, type: "image", status: "hidden", query: "hidden image 8" },
    { id: 9, type: "video", status: "hidden", query: "hidden video 9" },
  ]

  const postsToDisplay = showHidden ? [...drafts, ...hiddenPosts] : drafts

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-lg font-semibold">Drafts</h2>
        <Button variant="ghost" size="sm" onClick={() => setShowHidden(!showHidden)}>
          {showHidden ? (
            <>
              <EyeOff className="h-5 w-5 mr-1" /> Hide Hidden
            </>
          ) : (
            <>
              <Eye className="h-5 w-5 mr-1" /> Show Hidden
            </>
          )}
        </Button>
      </div>

      {/* Content Grid */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-3">
        {postsToDisplay.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-lg">No drafts or hidden posts yet.</p>
            <p className="text-sm">Start creating to see them here!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {postsToDisplay.map((post) => (
              <div key={post.id} className="relative aspect-square group cursor-pointer">
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=${post.query}`}
                  alt={`${post.status} ${post.id}`}
                  fill
                  className="object-cover rounded-sm"
                />
                {post.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                )}
                {post.status === "hidden" && (
                  <div className="absolute top-1 left-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                    Hidden
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
