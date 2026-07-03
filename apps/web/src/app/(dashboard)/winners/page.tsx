'use client'

import { useTranslation } from 'react-i18next'
import { Card, Button, Avatar, Badge } from '@comp-dash/design-system'
import { Trophy, Download } from 'lucide-react'

const mockWinners = [
  {
    id: '1',
    studentName: 'Jeevan R',
    email: 'jeevan.r@citchennai.net',
    competition: 'HackFusion 2025',
    department: 'CSE',
    position: '1st',
    prize: '₹50,000',
    date: '2025-06-15',
  },
  {
    id: '2',
    studentName: 'Kavin Raj',
    email: 'kavin.r@citchennai.net',
    competition: 'AI Innovation Challenge',
    department: 'AIDS',
    position: '2nd',
    prize: '₹25,000',
    date: '2025-05-20',
  },
  {
    id: '3',
    studentName: 'Harini S',
    email: 'harini.s@citchennai.net',
    competition: 'Code Blitz',
    department: 'IT',
    position: '1st',
    prize: '₹30,000',
    date: '2025-05-10',
  },
  {
    id: '4',
    studentName: 'Yuvanaj G',
    email: 'yuvanaj.g@citchennai.net',
    competition: 'Tech Summit Hackathon',
    department: 'CSE',
    position: '3rd',
    prize: '₹10,000',
    date: '2025-04-28',
  },
  {
    id: '5',
    studentName: 'Pranav M',
    email: 'pranav.m@citchennai.net',
    competition: 'IEEE Paper Presentation',
    department: 'CSE',
    position: '1st',
    prize: '₹15,000',
    date: '2025-04-12',
  },
]

const positionColors: Record<string, 'warning' | 'secondary' | 'primary'> = {
  '1st': 'warning',
  '2nd': 'secondary',
  '3rd': 'primary',
}

export default function WinnersPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.winners')}</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Student</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Competition</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Department</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Position</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Prize</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockWinners.map((winner) => (
                <tr key={winner.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={winner.studentName} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{winner.studentName}</p>
                        <p className="text-xs text-gray-500">{winner.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-900">{winner.competition}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="primary" size="sm">{winner.department}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={positionColors[winner.position] || 'primary'} size="sm">{winner.position}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{winner.prize}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(winner.date).toLocaleDateString()}
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
