'use client'

import { useTranslation } from 'react-i18next'
import { Card, Button, NotificationItem } from '@comp-dash/design-system'
import { CheckCheck } from 'lucide-react'
import type { NotificationType } from '@comp-dash/types'

const mockNotifications: {
  id: string
  type: NotificationType
  title: string
  message: string
  time: string
  isRead: boolean
}[] = [
  {
    id: '1',
    type: 'verification_update',
    title: 'Registration Verified',
    message: 'Your registration for HackFusion 2025 has been verified by your advisor.',
    time: '2 hours ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'new_competition',
    title: 'New Competition Posted',
    message: 'AI Innovation Challenge 2025 is now open for registrations. Deadline: July 30.',
    time: '5 hours ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'deadline_reminder',
    title: 'Deadline Approaching',
    message: 'Code Blitz registration closes in 2 days. Complete your registration now.',
    time: '1 day ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'registration_confirmed',
    title: 'Registration Confirmed',
    message: 'Your team has been successfully registered for Tech Summit Hackathon.',
    time: '2 days ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'winner_announced',
    title: 'Winner Announced',
    message: 'Congratulations! Results for IEEE Paper Presentation are now available.',
    time: '3 days ago',
    isRead: true,
  },
  {
    id: '6',
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance on July 5 from 2:00 AM to 4:00 AM IST.',
    time: '5 days ago',
    isRead: true,
  },
]

export default function NotificationsPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.notifications')}</h1>
        <Button variant="outline" size="sm">
          <CheckCheck className="w-4 h-4 mr-2" />
          {t('notifications.markAllRead')}
        </Button>
      </div>

      <Card padding="none">
        <div className="divide-y divide-gray-100">
          {mockNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              title={notification.title}
              message={notification.message}
              time={notification.time}
              isRead={notification.isRead}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
