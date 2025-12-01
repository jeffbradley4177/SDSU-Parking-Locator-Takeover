import { useState, useCallback, memo, type FormEvent } from "react";
import { Container } from "@/shared/components/container";
import { Logo } from "@/shared/components/logo";
import { Text } from "@/shared/components/typography";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

// Memoized icons - created once, not on every render
const EmailIcon = <Icon icon={BiEnvelope} size="md" />;
const LockIcon = <Icon icon={BiLock} size="md" />;
const GoogleIcon = <FcGoogle className="h-5 w-5" />;

export interface LoginFormProps {
  /** Callback when form is submitted */
  onSubmit?: (email: string, password: string) => void;
  /** Callback for Google sign-in */
  onGoogleSignIn?: () => void;
  /** Callback for create account link */
  onCreateAccount?: () => void;
  /** External loading state */
  isLoading?: boolean;
  /** External error message */
  error?: string;
}

export const LoginForm = memo(function LoginForm({
  onSubmit,
  onGoogleSignIn,
  onCreateAccount,
  isLoading = false,
  error,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Memoized handlers
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (email && password) {
        onSubmit?.(email, password);
      }
    },
    [email, password, onSubmit]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  );

  return (
    <Container
      asStack
      gap="spacious"
      withPadding={false}
      minWidth="full"
      className="w-full max-w-full md:max-w-[var(--primitive-width-500)]"
    >
      {/* Logo */}
      <div className="flex justify-center">
        <Logo variant="primary-red" size="lg" />
      </div>

      {/* Error Message */}
      {error && (
        <Text size="small" color="error" align="center">
          {error}
        </Text>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--component-page-gap-default)]">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          leadingIcon={EmailIcon}
          disabled={isLoading}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          leadingIcon={LockIcon}
          disabled={isLoading}
          required
        />

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          disabled={isLoading || !email || !password}
        >
          Sign In
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-[var(--component-page-gap-default)]">
        <div className="flex-1 h-px bg-[var(--semantic-border-subtle)]" />
        <Text size="small" color="secondary">
          or
        </Text>
        <div className="flex-1 h-px bg-[var(--semantic-border-subtle)]" />
      </div>

      {/* Google Sign In */}
      <Button
        variant="google"
        onClick={onGoogleSignIn}
        leadingIcon={GoogleIcon}
        disabled={isLoading}
      >
        Continue with Google
      </Button>

      {/* Create Account Link */}
      <Text size="small" color="secondary" align="center">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onCreateAccount}
          className="text-[var(--semantic-text-link)] hover:underline"
        >
          Create account
        </button>
      </Text>
    </Container>
  );
});
