import { Container } from "@/shared/components/container";
import { Text } from "@/shared/components/typography";

export const StaffDashboard = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="xl">
        <Text as="h1" level="h1">Staff Dashboard</Text>
        <Text color="secondary" className="mt-4">Staff dashboard content coming soon.</Text>
      </Container>
    </div>
  );
};
