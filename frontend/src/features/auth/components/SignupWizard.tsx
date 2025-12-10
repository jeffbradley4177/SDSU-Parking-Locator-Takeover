import { useState, useCallback, memo } from "react";
import { Container } from "@/shared/components/container";
import { Logo } from "@/shared/components/logo";
import { Text } from "@/shared/components/typography";
import { Progress } from "@/shared/components/progress";
import { RoleSelector } from "./RoleSelector";
import { AccountDetailsStep } from "./steps/AccountDetailsStep";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { CompleteStep } from "./steps/CompleteStep";
import { useAuth } from "@/features/auth/hooks/useAuth";
import type { UserRole } from "@/shared/types";

export interface SignupData {
  // Role selection
  role: UserRole | null;
  
  // Account details
  email: string;
  username: string;
  password: string;
  
  // Personal info
  firstName: string;
  lastName: string;
  phone: string;
  studentId?: string;
  major?: string;
  employeeId?: string;
  department?: string;
}

export interface SignupWizardProps {
  /** Callback when signup is completed */
  onComplete?: () => void;
  /** Callback when user cancels signup */
  onCancel?: () => void;
}

export const SignupWizard = memo(function SignupWizard({
  onComplete,
  onCancel,
}: SignupWizardProps) {
  const { signup, isLoading, error } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [signupData, setSignupData] = useState<SignupData>({
    role: null,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const totalSteps = 4; // Role, Account, Personal, Complete

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleRoleSelect = useCallback((role: UserRole) => {
    setSignupData((prev) => ({ ...prev, role }));
  }, []);

  const handleRoleContinue = useCallback(() => {
    if (signupData.role) {
      handleNext();
    }
  }, [signupData.role, handleNext]);

  const handleAccountDetails = useCallback(
    (data: Pick<SignupData, "email" | "username" | "password">) => {
      setSignupData((prev) => ({ ...prev, ...data }));
      handleNext();
    },
    [handleNext]
  );

  const handlePersonalInfo = useCallback(
    async (data: Partial<SignupData>) => {
      const finalData = { ...signupData, ...data };
      setSignupData(finalData);
      
      // Submit signup
      if (finalData.role) {
        const success = await signup({
          email: finalData.email,
          username: finalData.username,
          password: finalData.password,
          role: finalData.role,
          firstName: finalData.firstName,
          lastName: finalData.lastName,
          phone: finalData.phone,
          studentId: finalData.studentId,
          major: finalData.major,
          employeeId: finalData.employeeId,
          department: finalData.department,
        });
        
        if (success) {
          handleNext();
        }
      }
    },
    [signupData, signup, handleNext]
  );

  const handleComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <RoleSelector
            selectedRole={signupData.role}
            onSelect={handleRoleSelect}
            onContinue={handleRoleContinue}
            onCancel={onCancel}
          />
        );
      case 1:
        return (
          <AccountDetailsStep
            email={signupData.email}
            username={signupData.username}
            password={signupData.password}
            onNext={handleAccountDetails}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <PersonalInfoStep
            role={signupData.role}
            firstName={signupData.firstName}
            lastName={signupData.lastName}
            phone={signupData.phone}
            studentId={signupData.studentId}
            major={signupData.major}
            employeeId={signupData.employeeId}
            department={signupData.department}
            onNext={handlePersonalInfo}
            onBack={handleBack}
            isLoading={isLoading}
          />
        );
      case 3:
        return <CompleteStep onContinue={handleComplete} />;
      default:
        return null;
    }
  };

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

      {/* Progress Indicator */}
      {currentStep < totalSteps - 1 && (
        <div className="flex flex-col gap-[var(--component-page-gap-compact)]">
          <Text size="small" color="secondary" align="center">
            Step {currentStep + 1} of {totalSteps - 1}
          </Text>
          <Progress 
            value={((currentStep + 1) / (totalSteps - 1)) * 100}
            label={`Step ${currentStep + 1} of ${totalSteps - 1}`}
          />
        </div>
      )}

      {/* Step Content */}
      {renderStep()}
    </Container>
  );
});
