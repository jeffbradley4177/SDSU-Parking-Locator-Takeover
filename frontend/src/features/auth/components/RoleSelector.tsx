import { memo } from "react";
import { Text } from "@/shared/components/typography";
import { Button } from "@/shared/components/button";
import { BiUser, BiBuilding } from "react-icons/bi";
import type { UserRole } from "@/shared/types";

export interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onSelect?: (role: UserRole) => void;
  onContinue?: () => void;
  onCancel?: () => void;
}

const ROLE_OPTIONS: Array<{
  role: UserRole;
  icon: typeof BiUser;
  title: string;
}> = [
  {
    role: "STUDENT",
    icon: BiUser,
    title: "Student",
  },
  {
    role: "STAFF",
    icon: BiBuilding,
    title: "Faculty / Staff",
  },
];

export const RoleSelector = memo(function RoleSelector({
  selectedRole,
  onSelect,
  onContinue,
  onCancel,
}: RoleSelectorProps) {
  return (
    <div className="flex flex-col gap-[var(--component-container-gap-spacious)] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[var(--component-container-gap-compact)]">
        <Text as="h2" level="h2" weight="semibold" align="center">
          Choose Your Role
        </Text>
        <Text size="small" color="secondary" align="center">
          Select the option that best describes you
        </Text>
      </div>

      {/* Role Cards */}
      <div className="flex flex-col gap-[var(--component-container-gap-default)]">
        {ROLE_OPTIONS.map(({ role, icon: IconComponent, title }) => (
          <Button
            key={role}
            onClick={() => onSelect?.(role)}
            variant={selectedRole === role ? "primary" : "outline"}
          >
            <IconComponent className="w-5 h-5" />
            {title}
          </Button>
        ))}
      </div>

      {/* Continue Button */}
      <Button
        onClick={onContinue}
        disabled={!selectedRole}
        variant="secondary"
        className="w-full"
      >
        Continue
      </Button>

      {/* Cancel Link */}
      <Text size="small" color="secondary" align="center">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onCancel}
          className="text-[var(--semantic-text-link)] hover:underline"
        >
          Sign in
        </button>
      </Text>
    </div>
  );
});
