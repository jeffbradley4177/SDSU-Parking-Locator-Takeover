/**
 * Login Page
 *
 * Authentication page for users, staff, and admin
 */

import { LoginForm } from "@/features/auth/components/LoginForm";

export const Login = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log("Login submitted:", { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[var(--component-page-bg)]"
      style={{
        paddingInline: "var(--component-page-padding-inline)",
        paddingBlock: "var(--component-page-padding-block)",
      }}
    >
      <LoginForm
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
};
