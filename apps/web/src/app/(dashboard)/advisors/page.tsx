'use client'

import { useTranslation } from 'react-i18next'
import { Card, Button, SearchBar, Avatar, Badge } from '@comp-dash/design-system'
import { Plus, Download } from 'lucide-react'

const mockAdvisors = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    email: 'priya.sharma@citchennai.net',
    department: 'CSE',
    assignedSections: ['3A', '3B', '3C'],
    pendingVerifications: 4,
  },
  {
    id: '2',
    name: 'Mr. Arun Kumar',
    email: 'arun.kumar@citchennai.net',
    department: 'IT',
    assignedSections: ['2A', '2B'],
    pendingVerifications: 2,
  },
  {
    id: '3',
    name: 'Dr. Meena Raj',
    email: 'meena.raj@citchennai.net',
    department: 'AIDS',
    assignedSections: ['4A', '4B'],
    pendingVerifications: 7,
  },
]

export default function AdvisorsPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.advisors')}</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Advisor
          </Button>
        </div>
      </div>

      <Card padding="md">
        <SearchBar placeholder="Search advisors..." />
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Advisor</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Department</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Assigned Sections</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Pending Verifications</th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockAdvisors.map((advisor) => (
                <tr key={advisor.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={advisor.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{advisor.name}</p>
                        <p className="text-xs text-gray-500">{advisor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="primary" size="sm">{advisor.department}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {advisor.assignedSections.map((section) => (
                        <Badge key={section} variant="secondary" size="sm">{section}</Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{advisor.pendingVerifications}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
