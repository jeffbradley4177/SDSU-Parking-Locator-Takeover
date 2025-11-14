import { H1, Text } from "@/shared/components/typography";

export const About = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <H1>About</H1>
      <Text>This app was built by SDSU students to help track parking availability on campus.</Text>
    </div>
  );
}
