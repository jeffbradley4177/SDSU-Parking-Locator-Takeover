/**
 * Authentication type definitions
 */

/**
 * User role types
 */
export type UserRole = "STUDENT" | "STAFF" | "ADMIN";

/**
 * User data structure
 */
export interface User {
  id: number;
  email: string;
  username: string;
  role: UserRole;
}

/**
 * Authentication state
 */
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}
