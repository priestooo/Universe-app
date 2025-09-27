"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress" // Assuming shadcn/ui progress component
import { ArrowLeft, Eye, Heart, MessageCircle } from "lucide-react"

export default function PlanetInsightsModal({ onClose }: { onClose: () => void }) {
  const dummyData = {
    reach: "1.5M",
    profileViews: "250K",
    contentInteractions: "3.2M",
    followersGrowth: "+15K",
    topPostLikes: "500K",
    topPostComments: "15K",
    audienceDemographics: {
      male: 45,
      female: 55,
      other: 0,
    },
    ageGroups: {
      "18-24": 30,
      "25-34": 40,
      "35-44": 20,
      "45+": 10,
    },
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-lg font-semibold">Planet Insights</h2>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </div>

      {/* Insights Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dummyData.reach}</div>
              <p className="text-xs text-green-500">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Profile Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dummyData.profileViews}</div>
              <p className="text-xs text-green-500">+8% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dummyData.contentInteractions}</div>
              <p className="text-xs text-green-500">+15% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dummyData.followersGrowth}</div>
              <p className="text-xs text-green-500">New this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Content Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="Top Post"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">"Exploring the mysteries of the universe!"</p>
                <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" /> {dummyData.topPostLikes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" /> {dummyData.topPostComments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" /> {dummyData.reach}
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              View All Posts
            </Button>
          </CardContent>
        </Card>

        {/* Audience Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Gender</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-16">Male:</span>
                <Progress value={dummyData.audienceDemographics.male} className="h-2 flex-1" />
                <span className="w-8 text-right">{dummyData.audienceDemographics.male}%</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <span className="w-16">Female:</span>
                <Progress value={dummyData.audienceDemographics.female} className="h-2 flex-1" />
                <span className="w-8 text-right">{dummyData.audienceDemographics.female}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Age Groups</p>
              {Object.entries(dummyData.ageGroups).map(([range, value]) => (
                <div key={range} className="flex items-center gap-2 text-sm mt-1">
                  <span className="w-16">{range}:</span>
                  <Progress value={value} className="h-2 flex-1" />
                  <span className="w-8 text-right">{value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
