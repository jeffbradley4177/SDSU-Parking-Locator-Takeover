import { useState, useCallback, memo, type FormEvent } from "react";
import { Text } from "@/shared/components/typography";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { BiEnvelope, BiUser, BiLock } from "react-icons/bi";

const EmailIcon = <Icon icon={BiEnvelope} size="md" />;
const UserIcon = <Icon icon={BiUser} size="md" />;
const LockIcon = <Icon icon={BiLock} size="md" />;

export interface AccountDetailsStepProps {
  email: string;
  username: string;
  password: string;
  onNext?: (data: { email: string; username: string; password: string }) => void;
  onBack?: () => void;
}

export const AccountDetailsStep = memo(function AccountDetailsStep({
  email: initialEmail,
  username: initialUsername,
  password: initialPassword,
  onNext,
  onBack,
}: AccountDetailsStepProps) {
  const [email, setEmail] = useState(initialEmail);
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Username validation
    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [email, username, password, confirmPassword]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        onNext?.({ email, username, password });
      }
    },
    [email, username, password, validateForm, onNext]
  );

  return (
    <div className="flex flex-col gap-[var(--component-container-gap-spacious)] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[var(--component-container-gap-compact)]">
        <Text as="h2" level="h2" weight="semibold" align="center">
          Account Details
        </Text>
        <Text size="small" color="secondary" align="center">
          Create your login credentials
        </Text>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[var(--component-container-gap-default)]"
      >
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leadingIcon={EmailIcon}
            required
          />
          {errors.email && (
            <Text size="small" color="error" className="mt-1">
              {errors.email}
            </Text>
          )}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            leadingIcon={UserIcon}
            required
          />
          {errors.username && (
            <Text size="small" color="error" className="mt-1">
              {errors.username}
            </Text>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leadingIcon={LockIcon}
            required
          />
          {errors.password && (
            <Text size="small" color="error" className="mt-1">
              {errors.password}
            </Text>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            leadingIcon={LockIcon}
            required
          />
          {errors.confirmPassword && (
            <Text size="small" color="error" className="mt-1">
              {errors.confirmPassword}
            </Text>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[var(--component-page-gap-default)]">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1 w-full sm:w-auto">
            Back
          </Button>
          <Button type="submit" variant="primary" className="flex-1 w-full sm:w-auto">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
});
