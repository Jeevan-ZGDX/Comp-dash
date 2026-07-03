'use client'

import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, Button, StatusBadge } from '@comp-dash/design-system'
import { Avatar } from '@comp-dash/design-system'
import type { Registration } from '@comp-dash/types'

interface PendingVerificationsTableProps {
  data: Registration[]
}

export function PendingVerificationsTable({ data }: PendingVerificationsTableProps) {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('dashboard.pendingVerifications')}</CardTitle>
      </CardHeader>
      <div className="mt-4 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">
                Student
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">
                Competition
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">
                Requested On
              </th>
              <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-500">
                  {t('common.noData')}
                </td>
              </tr>
            ) : (
              data.map((reg) => (
                <tr key={reg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={reg.userId} size="sm" />
                      <span className="text-sm font-medium text-gray-900">{reg.userId}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{reg.competition.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(reg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        Reject
                      </Button>
                      <Button variant="primary" size="sm">
                        Verify
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
