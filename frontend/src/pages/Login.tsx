/**
 * Login Page
 *
 * Authentication page for users, staff, and admin
 */

import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/shared/components/button";
import { BiArrowBack } from "react-icons/bi";

export const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, isAuthenticated, clearError } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  // Clear error when component unmounts
  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const handleSubmit = useCallback(
    async (email: string, password: string) => {
      const success = await login(email, password);
      if (success) {
        navigate("/profile");
      }
    },
    [login, navigate]
  );

  const handleGoogleSignIn = useCallback(() => {
    navigate("/under-development");
  }, [navigate]);

  const handleCreateAccount = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const handleForgotPassword = useCallback(() => {
    navigate("/under-development");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[var(--component-page-bg)]">
      {/* Back to Home Button - Top Left */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          leadingIcon={BiArrowBack}
          className="!w-auto"
        >
          Back to Home
        </Button>
      </div>

      {/* Centered Login Form */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          paddingInline: "var(--component-page-padding-inline)",
          paddingBlock: "var(--component-page-padding-block)",
        }}
      >
        <LoginForm
          onSubmit={handleSubmit}
          onGoogleSignIn={handleGoogleSignIn}
          onCreateAccount={handleCreateAccount}
          onForgotPassword={handleForgotPassword}
          isLoading={isLoading}
          error={error ?? undefined}
        />
      </div>
    </div>
  );
};
