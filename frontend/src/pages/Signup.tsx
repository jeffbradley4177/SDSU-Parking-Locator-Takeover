/**
 * Signup Page
 *
 * Multi-step signup wizard for creating new accounts
 */

import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignupWizard } from "@/features/auth/components/SignupWizard";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/shared/components/button";
import { BiArrowBack } from "react-icons/bi";

export const Signup = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  const handleComplete = useCallback(() => {
    // After successful signup, navigate to profile or dashboard
    navigate("/profile");
  }, [navigate]);

  const handleCancel = useCallback(() => {
    // Navigate back to login if user cancels
    navigate("/login");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[var(--component-page-bg)]">
      {/* Back to Login Button - Top Left */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          onClick={handleCancel}
          leadingIcon={BiArrowBack}
          className="!w-auto"
        >
          Back to Login
        </Button>
      </div>

      {/* Centered Signup Wizard */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          paddingInline: "var(--component-page-padding-inline)",
          paddingBlock: "var(--component-page-padding-block)",
        }}
      >
        <SignupWizard onComplete={handleComplete} onCancel={handleCancel} />
      </div>
    </div>
  );
};
