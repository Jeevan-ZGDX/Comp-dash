import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../client'
import type {
  Registration,
  RegistrationListResponse,
  RegistrationCreate,
  RegistrationStats,
  RegistrationStatus,
  DashboardStats,
  AdminRegistrationStats,
} from '@comp-dash/types'

export function useRegistrations(params?: {
  status?: RegistrationStatus
  page?: number
  limit?: number
}) {
  return useQuery({
    queryKey: ['registrations', params],
    queryFn: () =>
      apiClient.get<RegistrationListResponse>('/registrations', params as Record<string, unknown>),
    staleTime: 2 * 60 * 1000,
  })
}

export function useRegistration(id: string) {
  return useQuery({
    queryKey: ['registrations', id],
    queryFn: () => apiClient.get<Registration>(`/registrations/${id}`),
    enabled: !!id,
  })
}

export function useRegistrationStats() {
  return useQuery({
    queryKey: ['registrations', 'stats'],
    queryFn: () => apiClient.get<RegistrationStats>('/registrations/stats'),
    staleTime: 5 * 60 * 1000,
  })
}

export function useRegisterForCompetition() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: RegistrationCreate) =>
      apiClient.post<Registration, RegistrationCreate>('/registrations', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrations'] })
      queryClient.invalidateQueries({ queryKey: ['registrations', 'stats'] })
    },
  })
}

export function useVerifyRegistration() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, action, reason }: { id: string; action: 'approve' | 'reject'; reason?: string }) =>
      apiClient.patch<Registration>(`/registrations/${id}/verify`, { action, reason }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrations'] })
      queryClient.invalidateQueries({ queryKey: ['registrations', 'stats'] })
    },
  })
}

export function useDashboardStats(dateRange?: { start: string; end: string }) {
  return useQuery({
    queryKey: ['dashboard', 'stats', dateRange],
    queryFn: () =>
      apiClient.get<DashboardStats>('/admin/dashboard/stats', dateRange as Record<string, unknown>),
    staleTime: 5 * 60 * 1000,
  })
}

export function useAdminRegistrationStats() {
  return useQuery({
    queryKey: ['admin', 'registrations', 'stats'],
    queryFn: () => apiClient.get<AdminRegistrationStats>('/admin/registrations/stats'),
    staleTime: 5 * 60 * 1000,
  })
}
