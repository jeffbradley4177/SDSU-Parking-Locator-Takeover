import { memo } from "react";
import { Text } from "@/shared/components/typography";

export interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

export const InfoRow = memo(function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-start gap-[var(--component-container-gap-default)]">
      <div className="pt-0.5">{icon}</div>
      <div className="flex flex-col gap-[var(--component-container-gap-tight)]">
        <Text size="caption" color="secondary">
          {label}
        </Text>
        <Text weight="medium">{value}</Text>
      </div>
    </div>
  );
});
