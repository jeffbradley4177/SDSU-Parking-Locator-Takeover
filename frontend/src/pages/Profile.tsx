/**
 * Profile Page
 *
 * Displays user information and provides logout functionality.
 */

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@/shared/components/container";
import { Button } from "@/shared/components/button";
import { Text } from "@/shared/components/typography";
import { Logo } from "@/shared/components/logo";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ProfileView } from "@/features/user/components/profile/ProfileView";

export const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  // Not authenticated - show login prompt
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-[var(--component-page-padding-block)]">
        <Container
          asStack
          gap="spacious"
          withPadding={false}
          minWidth="full"
          className="w-full max-w-full md:max-w-[var(--primitive-width-500)]"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <Logo variant="primary-red" size="lg" />
          </div>

          {/* Message */}
          <Text size="body" color="secondary" align="center">
            Sign in to view your profile and submitted reports.
          </Text>

          {/* Sign In Button */}
          <Button variant="primary" onClick={handleLogin}>
            Sign In
          </Button>
        </Container>
      </div>
    );
  }

  // Authenticated - show profile
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="md">
        <ProfileView
          username={user.username}
          email={user.email}
          role={user.role}
          onSignOut={handleLogout}
        />
      </Container>
    </div>
  );
};
