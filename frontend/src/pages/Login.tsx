/**
 * Login Page
 *
 * Authentication page for users, staff, and admin
 */

import { LoginForm } from "@/features/auth/components/LoginForm";

export const Login = () => {
  return (
    <div className="page-content">
      <LoginForm />
    </div>
  );
};
