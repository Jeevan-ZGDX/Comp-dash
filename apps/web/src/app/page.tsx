'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-accent">C</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Comp-Dash</h1>
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    </div>
  )
}
