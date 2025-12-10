/**
 * Authentication Context
 *
 * Provides authentication state and methods throughout the app.
 * Uses localStorage for persistence.
 */

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User, UserRole } from "@/shared/types";

// Storage keys
const STORAGE_KEY = "sdsu_parking_auth_user";

// Mock users for development/testing
const MOCK_USERS: Array<{ email: string; password: string; user: User }> = [
  {
    email: "student@sdsu.edu",
    password: "password123",
    user: {
      id: 101,
      email: "student@sdsu.edu",
      username: "aztecStudent",
      role: "STUDENT",
    },
  },
  {
    email: "staff@sdsu.edu",
    password: "password123",
    user: {
      id: 201,
      email: "staff@sdsu.edu",
      username: "aztecStaff",
      role: "STAFF",
    },
  },
  {
    email: "admin@sdsu.edu",
    password: "admin123",
    user: {
      id: 301,
      email: "admin@sdsu.edu",
      username: "aztecAdmin",
      role: "ADMIN",
    },
  },
];

/**
 * Signup data interface
 */
export interface SignupData {
  email: string;
  username: string;
  password: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  phone?: string;
  studentId?: string;
  major?: string;
  employeeId?: string;
  department?: string;
}

/**
 * Auth context value interface
 */
export interface AuthContextValue {
  /** Current authenticated user */
  user: User | null;
  /** Whether user is authenticated */
  isAuthenticated: boolean;
  /** Loading state during auth operations */
  isLoading: boolean;
  /** Error message from last auth operation */
  error: string | null;
  /** Login with email and password */
  login: (email: string, password: string) => Promise<boolean>;
  /** Signup with user data */
  signup: (data: SignupData) => Promise<boolean>;
  /** Logout current user */
  logout: () => void;
  /** Clear error state */
  clearError: () => void;
}

// Create context with undefined default (will throw if used outside provider)
export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider Component
 *
 * Wraps the app to provide authentication state and methods.
 *
 * @example
 * ```tsx
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 * ```
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedUser = JSON.parse(stored) as User;
        setUser(parsedUser);
      }
    } catch (err) {
      console.error("Failed to parse stored user:", err);
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login handler - validates against mock users
  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      try {
        // Find matching mock user
        const mockUser = MOCK_USERS.find(
          (u) =>
            u.email.toLowerCase() === email.toLowerCase() &&
            u.password === password
        );

        if (mockUser) {
          setUser(mockUser.user);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser.user));
          setIsLoading(false);
          return true;
        } else {
          setError("Invalid email or password");
          setIsLoading(false);
          return false;
        }
      } catch (err) {
        setError("An unexpected error occurred");
        setIsLoading(false);
        return false;
      }
    },
    []
  );

  // Signup handler - creates new user account
  const signup = useCallback(
    async (data: SignupData): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      try {
        // Check if email already exists
        const existingUser = MOCK_USERS.find(
          (u) => u.email.toLowerCase() === data.email.toLowerCase()
        );

        if (existingUser) {
          setError("Email already in use");
          setIsLoading(false);
          return false;
        }

        // Create new user
        const newUser: User = {
          id: Date.now(), // Generate simple ID
          email: data.email,
          username: data.username,
          role: data.role,
        };

        // Store user and auto-login
        setUser(newUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
        
        // In a real app, we would also store additional user data
        // (firstName, lastName, etc.) in the backend
        
        setIsLoading(false);
        return true;
      } catch (err) {
        setError("An unexpected error occurred during signup");
        setIsLoading(false);
        return false;
      }
    },
    []
  );

  // Logout handler
  const logout = useCallback(() => {
    setUser(null);
    setError(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Clear error handler
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
      error,
      login,
      signup,
      logout,
      clearError,
    }),
    [user, isLoading, error, login, signup, logout, clearError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
