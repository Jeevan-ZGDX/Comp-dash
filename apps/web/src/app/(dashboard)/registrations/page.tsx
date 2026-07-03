'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Button, SearchBar, StatusBadge } from '@comp-dash/design-system'
import { useRegistrations } from '@comp-dash/api'
import { Download } from 'lucide-react'
import type { RegistrationStatus } from '@comp-dash/types'

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending_verification' },
  { label: 'Verified', value: 'verified' },
  { label: 'Completed', value: 'completed' },
  { label: 'Rejected', value: 'rejected' },
]

export default function RegistrationsPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [page, setPage] = useState(1)

  const { data, isLoading } = useRegistrations({
    status: selectedStatus === 'all' ? undefined : (selectedStatus as RegistrationStatus),
    page,
    limit: 10,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.registrations')}</h1>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card padding="md">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <SearchBar
              placeholder="Search registrations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch('')}
            />
          </div>
          <div className="flex gap-2">
            {statusOptions.map((status) => (
              <button
                key={status.value}
                onClick={() => setSelectedStatus(status.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedStatus === status.value
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Registrations Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Student
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Competition
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Registered On
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Verified On
                </th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td colSpan={6} className="px-6 py-4">
                      <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : data?.data && data.data.length > 0 ? (
                data.data.map((reg) => (
                  <tr key={reg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{reg.userId}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{reg.competition.title}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={reg.status as 'pending' | 'verified' | 'completed' | 'rejected'} size="sm" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(reg.registeredAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {reg.verifiedAt ? new Date(reg.verifiedAt).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    No registrations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data && data.total > 10 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing {((page - 1) * 10) + 1} to {Math.min(page * 10, data.total)} of {data.total}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page >= Math.ceil(data.total / 10)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
