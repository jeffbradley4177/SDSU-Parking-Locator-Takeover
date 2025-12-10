import { Container } from "@/shared/components/container";
import { Text } from "@/shared/components/typography";

export const Analytics = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="xl">
        <Text as="h1" level="h1">Analytics</Text>
        <Text color="secondary" className="mt-4">Analytics dashboard coming soon.</Text>
      </Container>
    </div>
  );
};
