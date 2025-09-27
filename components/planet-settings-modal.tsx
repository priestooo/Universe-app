"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function PlanetSettingsModal({ onClose }: { onClose: () => void }) {
  const [pushNotifications, setPushNotifications] = useState(true)
  const [privateAccount, setPrivateAccount] = useState(false)

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-lg font-semibold">Planet Settings</h2>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Account Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3">Account</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Edit Profile <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Change Password <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Linked Accounts <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Privacy Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3">Privacy</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <Label htmlFor="private-account" className="text-base">
                Private Account
              </Label>
              <Switch id="private-account" checked={privateAccount} onCheckedChange={setPrivateAccount} />
            </div>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Blocked Users <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Comment Filters <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3">Notifications</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <Label htmlFor="push-notifications" className="text-base">
                Push Notifications
              </Label>
              <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
            </div>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Email Notifications <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Content & Display */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3">Content & Display</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Language <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Data Saver <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Support & About */}
        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-3">Support & About</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Help Center <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Terms of Service <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
            <Separator className="bg-gray-200" />
            <Button variant="ghost" className="w-full justify-between px-4 py-3 text-base h-auto">
              Privacy Policy <ChevronRight className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Logout */}
        <div className="pt-4">
          <Button variant="destructive" className="w-full py-3 text-base">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}
