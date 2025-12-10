/**
 * useAuth Hook
 *
 * Custom hook to access authentication context.
 * Must be used within an AuthProvider.
 *
 * @example
 * ```tsx
 * const { user, isAuthenticated, login, logout } = useAuth();
 *
 * if (isAuthenticated) {
 *   return <p>Welcome, {user.username}!</p>;
 * }
 * ```
 */

import { useContext } from "react";
import { AuthContext, type AuthContextValue } from "@/shared/contexts";

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
