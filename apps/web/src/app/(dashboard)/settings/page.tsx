'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, SettingsRow } from '@comp-dash/design-system'
import { Building2, Calendar, Bell, BellOff, Moon, Sun, Palette } from 'lucide-react'

export default function SettingsPage() {
  const { t } = useTranslation()
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [deadlineReminders, setDeadlineReminders] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.settings')}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <div className="mt-2 divide-y divide-gray-100">
          <SettingsRow
            icon={<Building2 className="w-5 h-5" />}
            label="Institution Name"
            value="Chennai Institute of Technology"
          />
          <SettingsRow
            icon={<Calendar className="w-5 h-5" />}
            label="Academic Year"
            value="2024 - 2025"
          />
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <div className="mt-2 divide-y divide-gray-100">
          <SettingsRow
            icon={<Bell className="w-5 h-5" />}
            label="Email Notifications"
            rightElement={
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  emailNotifications ? 'bg-[#6C4CF1]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            }
          />
          <SettingsRow
            icon={<BellOff className="w-5 h-5" />}
            label="Push Notifications"
            rightElement={
              <button
                onClick={() => setPushNotifications(!pushNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pushNotifications ? 'bg-[#6C4CF1]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            }
          />
          <SettingsRow
            icon={<Bell className="w-5 h-5" />}
            label="Deadline Reminders"
            rightElement={
              <button
                onClick={() => setDeadlineReminders(!deadlineReminders)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  deadlineReminders ? 'bg-[#6C4CF1]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    deadlineReminders ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            }
          />
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <div className="mt-2 divide-y divide-gray-100">
          <SettingsRow
            icon={<Palette className="w-5 h-5" />}
            label="Theme"
            rightElement={
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme('light')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'light'
                      ? 'bg-[#6C4CF1] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#6C4CF1] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            }
          />
        </div>
      </Card>
    </div>
  )
}
