import { Text } from "@/shared/components/typography";

export const About = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Text as="h1">About</Text>
      <Text>This app was built by SDSU students to help track parking availability on campus.</Text>
    </div>
  );
}
