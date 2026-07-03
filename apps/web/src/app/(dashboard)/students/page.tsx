'use client'

import { useTranslation } from 'react-i18next'
import { Card, Button, SearchBar, Avatar, Badge } from '@comp-dash/design-system'
import { Plus, Download } from 'lucide-react'

const mockStudents = [
  { id: '1', name: 'Jeevan R', email: 'jeevan.r@citchennai.net', department: 'CSE', year: '3rd Year', section: 'A', registered: 8, verified: 6 },
  { id: '2', name: 'Kavin Raj', email: 'kavin.r@citchennai.net', department: 'AIDS', year: '3rd Year', section: 'B', registered: 5, verified: 4 },
  { id: '3', name: 'Harini S', email: 'harini.s@citchennai.net', department: 'IT', year: '2nd Year', section: 'A', registered: 3, verified: 3 },
  { id: '4', name: 'Yuvanaj G', email: 'yuvanaj.g@citchennai.net', department: 'CSE', year: '4th Year', section: 'A', registered: 12, verified: 10 },
  { id: '5', name: 'Pranav M', email: 'pranav.m@citchennai.net', department: 'CSE', year: '3rd Year', section: 'C', registered: 6, verified: 5 },
]

export default function StudentsPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.students')}</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      <Card padding="md">
        <SearchBar placeholder="Search students..." />
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Student</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Department</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Year / Section</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Registered</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Verified</th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={student.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><Badge variant="primary" size="sm">{student.department}</Badge></td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.year} - {student.section}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.registered}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.verified}</td>
                  <td className="px-6 py-4 text-right"><Button variant="ghost" size="sm">View</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
