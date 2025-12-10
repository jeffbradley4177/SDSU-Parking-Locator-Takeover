import { memo } from "react";
import { Container } from "@/shared/components/container";
import { Button } from "@/shared/components/button";
import { Text } from "@/shared/components/typography";
import { Badge } from "@/shared/components/badge";
import { Icon } from "@/shared/components/icon";
import { InfoRow } from "@/shared/components/infoRow";
import { BiUser, BiEnvelope, BiIdCard } from "react-icons/bi";
import type { UserRole } from "@/shared/types";

// Memoized icons
const UserIcon = <Icon icon={BiUser} size="md" color="secondary" />;
const EmailIcon = <Icon icon={BiEnvelope} size="md" color="secondary" />;
const RoleIcon = <Icon icon={BiIdCard} size="md" color="secondary" />;

export interface ProfileViewProps {
  username: string;
  email: string;
  role: UserRole;
  onSignOut?: () => void;
}

export const ProfileView = memo(function ProfileView({
  username,
  email,
  role,
  onSignOut,
}: ProfileViewProps) {
  return (
    <Container
      asStack
      gap="spacious"
      withPadding={false}
      className="w-full"
    >
      {/* Header */}
      <Text as="h1" level="h2" align="center">
        Profile
      </Text>

      {/* User Info Card */}
      <Container asStack gap="comfortable" withPadding radius="lg" className="bg-[var(--semantic-bg-surface)]">
        <InfoRow icon={UserIcon} label="Username" value={username} />

        {/* Divider */}
        <div className="h-px bg-[var(--semantic-border-subtle)]" />

        <InfoRow icon={EmailIcon} label="Email" value={email} />

        {/* Divider */}
        <div className="h-px bg-[var(--semantic-border-subtle)]" />

        <InfoRow
          icon={RoleIcon}
          label="Role"
          value={
            <Badge
              variant={
                role === "ADMIN"
                  ? "purple"
                  : role === "STAFF"
                    ? "teal"
                    : "primary"
              }
            >
              {role}
            </Badge>
          }
        />
      </Container>

      {/* Reports Section */}
      <Container asStack gap="default" withPadding radius="lg" className="bg-[var(--semantic-bg-surface)]">
        <Text weight="medium">Submitted Reports</Text>
        <Text size="small" color="secondary">
          Your submitted parking reports will appear here (coming soon).
        </Text>
      </Container>

      {/* Sign Out Button */}
      {onSignOut && (
        <Button variant="destructive" onClick={onSignOut}>
          Sign Out
        </Button>
      )}
    </Container>
  );
});
