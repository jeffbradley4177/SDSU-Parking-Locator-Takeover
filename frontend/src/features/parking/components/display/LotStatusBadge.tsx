
import { Badge, type BadgeVariant } from "@/shared/components/badge/Badge";
import type { LotStatus } from "@/shared/types";

// Map lot status → badge text + color variant
const STATUS_CONFIG: Record<LotStatus, { label: string; variant: BadgeVariant }> = {
  Open: { label: "Open", variant: "success" },
  Busy: { label: "Busy", variant: "warning" },
  Full: { label: "Full", variant: "error" },
};

export interface LotStatusBadgeProps {
  status: LotStatus;
  className?: string;
}

export const LotStatusBadge = ({ status, className }: LotStatusBadgeProps) => {
  const config =
    STATUS_CONFIG[status] ??
    ({ label: status, variant: "neutral" as BadgeVariant });

  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};
