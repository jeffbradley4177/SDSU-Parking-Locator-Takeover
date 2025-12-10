import { memo } from "react";
import { Container } from "@/shared/components/container";
import { Text } from "@/shared/components/typography";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { BiCheckCircle } from "react-icons/bi";

export interface CompleteStepProps {
  /** Callback to continue to the app */
  onContinue?: () => void;
}

export const CompleteStep = memo(function CompleteStep({
  onContinue,
}: CompleteStepProps) {
  return (
    <Container
      asStack
      gap="spacious"
      withPadding={false}
      className="w-full text-center"
    >
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="rounded-full bg-[var(--semantic-surface-success-subtle)] p-6">
          <Icon icon={BiCheckCircle} size="2xl" color="success" />
        </div>
      </div>

      {/* Success Message */}
      <div className="flex flex-col gap-[var(--component-page-gap-compact)]">
        <Text as="h2" level="h2" weight="semibold">
          Account Created Successfully!
        </Text>
        <Text size="body" color="secondary">
          Welcome to SDSU Parking Locator. You're all set to start finding parking on campus.
        </Text>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-[var(--component-page-gap-compact)] text-left">
        <Text size="small" color="secondary" weight="semibold">
          What you can do now:
        </Text>
        <ul className="list-disc list-inside space-y-2 text-[length:var(--component-typography-size-small)] text-[color:var(--semantic-color-text-secondary)]">
          <li>
            View real-time parking availability
          </li>
          <li>
            Get directions to available parking spots
          </li>
          <li>
            Report parking lot status updates
          </li>
          <li>
            Save your favorite parking locations
          </li>
        </ul>
      </div>

      {/* Continue Button */}
      <Button variant="primary" onClick={onContinue} className="w-full">
        Get Started
      </Button>
    </Container>
  );
});
