import { Container } from "@/shared/components/container";
import { Text } from "@/shared/components/typography";

export const UserManagement = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="xl">
        <Text as="h1" level="h1">User Management</Text>
        <Text color="secondary" className="mt-4">User management features coming soon.</Text>
      </Container>
    </div>
  );
};
