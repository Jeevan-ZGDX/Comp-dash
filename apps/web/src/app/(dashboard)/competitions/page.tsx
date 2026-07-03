'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, Button, SearchBar, Badge, StatusBadge } from '@comp-dash/design-system'
import { useCompetitions } from '@comp-dash/api'
import { CompetitionCardSkeleton } from '@comp-dash/design-system'
import { Plus, Filter, Download } from 'lucide-react'
import type { CompetitionCategory } from '@comp-dash/types'

const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Hackathon', value: 'hackathon' },
  { label: 'Internship', value: 'internship' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Paper Presentation', value: 'paper_presentation' },
]

export default function CompetitionsPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const { data, isLoading } = useCompetitions({
    category: selectedCategory === 'all' ? undefined : (selectedCategory as CompetitionCategory),
    search: search || undefined,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{t('sidebar.competitions')}</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Competition
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card padding="md">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <SearchBar
              placeholder="Search competitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch('')}
            />
          </div>
          <div className="flex gap-2">
            {categoryOptions.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Competitions Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Competition
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Organizer
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Deadline
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Registrations
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
                data.data.map((comp) => (
                  <tr key={comp.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                          <span className="text-lg">🏆</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{comp.title}</p>
                          <p className="text-xs text-gray-500">{comp.mode}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="primary" size="sm">{comp.category}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{comp.organizer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(comp.registrationDeadline).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{comp.registrationCount || 0}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    No competitions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
