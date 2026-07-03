'use client'

import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, StatCard } from '@comp-dash/design-system'
import { BarChart3, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function AnalyticsPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.analytics')}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Competitions"
          value="142"
          change={12}
          changeLabel="from last month"
          icon={<BarChart3 className="w-5 h-5" />}
        />
        <StatCard
          title="Total Participants"
          value="2,847"
          change={8}
          changeLabel="from last month"
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard
          title="Win Rate"
          value="34%"
          change={-2}
          changeLabel="from last month"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatCard
          title="Verification Rate"
          value="89%"
          change={5}
          changeLabel="from last month"
          icon={<CheckCircle className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Competition Trends</CardTitle>
          </CardHeader>
          <div className="mt-4 h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Chart placeholder</p>
              <p className="text-xs text-gray-400">Competition registrations over time</p>
            </div>
          </div>
        </Card>

        <Card padding="lg">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
          </CardHeader>
          <div className="mt-4 h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Chart placeholder</p>
              <p className="text-xs text-gray-400">Participation by department</p>
            </div>
          </div>
        </Card>
      </div>

      <Card padding="lg">
        <CardHeader>
          <CardTitle>Verification Rates</CardTitle>
        </CardHeader>
        <div className="mt-4 h-64 flex items-center justify-center bg-gray-50 rounded-xl">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Chart placeholder</p>
            <p className="text-xs text-gray-400">Verification rates over time</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
