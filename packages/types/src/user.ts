export type UserRole = 'student' | 'advisor' | 'hod' | 'coe' | 'super_admin'

export interface User {
  id: string
  email: string
  name: string
  avatarUrl: string | null
  department: string
  section: string
  academicYear: string
  role: UserRole
  organizationId: string
  createdAt: string
  updatedAt: string
}

export interface Student extends User {
  role: 'student'
  rollNumber: string
  registeredCompetitions: number
  verifiedParticipations: number
  totalWins: number
}

export interface Advisor extends User {
  role: 'advisor'
  assignedSections: string[]
  pendingVerifications: number
}

export interface Admin extends User {
  role: 'hod' | 'coe' | 'super_admin'
  permissions: string[]
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginResponse {
  user: User
  token: string
  refreshToken: string
}

export interface ProfileUpdate {
  avatarUrl?: string
  notificationPreferences?: NotificationPreferences
  language?: SupportedLanguage
}

export type SupportedLanguage = 'en' | 'ta' | 'hi'

export interface NotificationPreferences {
  emailNotifications: boolean
  pushNotifications: boolean
  deadlineReminders: boolean
  verificationUpdates: boolean
  newCompetitions: boolean
}
