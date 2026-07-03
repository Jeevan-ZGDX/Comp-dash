import { Competition } from './competition'

export type RegistrationStatus = 'pending_verification' | 'verified' | 'completed' | 'rejected'

export interface Registration {
  id: string
  competitionId: string
  competition: Competition
  userId: string
  status: RegistrationStatus
  registeredAt: string
  verifiedAt: string | null
  verificationMethod: 'screenshot' | 'email' | 'manual' | null
  extractedConfirmationId: string | null
  extractedEmail: string | null
  rejectionReason: string | null
  notes: string | null
  createdAt: string
  updatedAt: string
}

export interface RegistrationListResponse {
  data: Registration[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface RegistrationCreate {
  competitionId: string
  verificationMethod: 'screenshot' | 'email'
  confirmationScreenshot?: string
  confirmationEmail?: string
}

export interface RegistrationStats {
  totalRegistered: number
  totalVerified: number
  totalCompleted: number
  totalRejected: number
  totalPending: number
  verificationRate: number
}

export interface AdminRegistrationStats extends RegistrationStats {
  totalCompetitions: number
  totalRegistrations: number
  registrationGrowth: number
  verifiedGrowth: number
  verificationRateChange: number
}

export interface DashboardStats {
  totalCompetitions: number
  totalRegistrations: number
  verifiedRegistrations: number
  verificationRate: number
  registrationsOverTime: { date: string; count: number }[]
  topDepartments: { name: string; count: number }[]
  recentVerified: Registration[]
  pendingVerifications: Registration[]
}
