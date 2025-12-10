/**
 * API Endpoints
 * 
 * Centralized definition of all API endpoints.
 */

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // Parking Lots
  PARKING: {
    LOTS: '/parking/lots',
    LOT_BY_ID: (id: number) => `/parking/lots/${id}`,
    AVAILABILITY: '/parking/availability',
    REPORT: '/parking/report',
  },

  // User
  USER: {
    PROFILE: '/user/profile',
    VEHICLES: '/user/vehicles',
    FAVORITES: '/user/favorites',
  },

  // Admin
  ADMIN: {
    USERS: '/admin/users',
    USER_BY_ID: (id: number) => `/admin/users/${id}`,
    ANALYTICS: '/admin/analytics',
  },

  // Staff
  STAFF: {
    DASHBOARD: '/staff/dashboard',
    REPORTS: '/staff/reports',
  },
} as const;
