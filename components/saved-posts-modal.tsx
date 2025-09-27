"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Grid, LayoutList, Bookmark } from "lucide-react"
import Image from "next/image"

export default function SavedPostsModal({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'

  const savedPosts = [
    { id: 1, type: "image", query: "saved post 1" },
    { id: 2, type: "video", query: "saved video 2" },
    { id: 3, type: "image", query: "saved post 3" },
    { id: 4, type: "image", query: "saved post 4" },
    { id: 5, type: "video", query: "saved video 5" },
    { id: 6, type: "image", query: "saved post 6" },
    { id: 7, type: "image", query: "saved post 7" },
    { id: 8, type: "video", query: "saved video 8" },
    { id: 9, type: "image", query: "saved post 9" },
    { id: 10, type: "image", query: "saved post 10" },
    { id: 11, type: "video", query: "saved video 11" },
    { id: 12, type: "image", query: "saved post 12" },
  ]

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-lg font-semibold">Saved</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-gray-100" : ""}
          >
            <Grid className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-gray-100" : ""}
          >
            <LayoutList className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-3">
        {savedPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-lg">No saved posts yet.</p>
            <p className="text-sm">Save posts to see them here!</p>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-3 gap-1 sm:gap-2" : "grid grid-cols-1 gap-2 sm:gap-3"}>
            {savedPosts.map((post) => (
              <div
                key={post.id}
                className={`relative aspect-square group cursor-pointer ${
                  viewMode === "list" ? "flex items-center gap-3 aspect-auto h-20 sm:h-24" : ""
                }`}
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=${post.query}`}
                  alt={`Saved Post ${post.id}`}
                  fill
                  className={`object-cover rounded-sm ${viewMode === "list" ? "w-20 h-20 sm:w-24 sm:h-24 !relative" : ""}`}
                />
                {viewMode === "list" && (
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">Post Title or Description {post.id}</p>
                    <p className="text-xs text-gray-500">Saved from @user_name</p>
                  </div>
                )}
                <div className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full">
                  <Bookmark className="h-3 w-3 fill-current" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
