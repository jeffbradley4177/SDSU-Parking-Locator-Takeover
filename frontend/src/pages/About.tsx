import { Container } from "@/shared/components/container";
import { Text } from "@/shared/components/typography";

export const About = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="xl">
        <Text as="h1" level="h1">About</Text>
        <Text className="mt-4">This app was built by SDSU students to help track parking availability on campus.</Text>
      </Container>
    </div>
  );
}
