import { useNavigate } from "react-router-dom";
import { Text } from "@/shared/components/typography";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { BiHome, BiCode } from "react-icons/bi";

export const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[var(--component-page-bg)]"
      style={{
        paddingInline: "var(--component-page-padding-inline)",
        paddingBlock: "var(--component-page-padding-block)",
      }}
    >
      <div className="flex flex-col items-center gap-[var(--component-page-gap-section)] text-center">
        <Icon icon={BiCode} size="2xl" color="secondary" />

        <div className="flex flex-col gap-[var(--component-page-gap-tight)]">
          <Text as="h1" weight="bold" align="center">
            Under Development
          </Text>
          <Text color="secondary" align="center">
            This feature is currently being built. Check back soon!
          </Text>
        </div>

        <Button
          variant="secondary"
          leadingIcon={BiHome}
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};
