import { useState, useCallback, memo, type FormEvent } from "react";
import { Text } from "@/shared/components/typography";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { BiUser, BiPhone, BiIdCard, BiBookmark } from "react-icons/bi";
import type { UserRole } from "@/shared/types";

const UserIcon = <Icon icon={BiUser} size="md" />;
const PhoneIcon = <Icon icon={BiPhone} size="md" />;
const IdIcon = <Icon icon={BiIdCard} size="md" />;
const BookIcon = <Icon icon={BiBookmark} size="md" />;

export interface PersonalInfoStepProps {
  role: UserRole | null;
  firstName: string;
  lastName: string;
  phone: string;
  studentId?: string;
  major?: string;
  employeeId?: string;
  department?: string;
  isLoading?: boolean;
  onNext?: (data: {
    firstName: string;
    lastName: string;
    phone: string;
    studentId?: string;
    major?: string;
    employeeId?: string;
    department?: string;
  }) => void;
  onBack?: () => void;
}

export const PersonalInfoStep = memo(function PersonalInfoStep({
  role,
  firstName: initialFirstName,
  lastName: initialLastName,
  phone: initialPhone,
  studentId: initialStudentId,
  major: initialMajor,
  employeeId: initialEmployeeId,
  department: initialDepartment,
  isLoading = false,
  onNext,
  onBack,
}: PersonalInfoStepProps) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [phone, setPhone] = useState(initialPhone);
  const [studentId, setStudentId] = useState(initialStudentId || "");
  const [major, setMajor] = useState(initialMajor || "");
  const [employeeId, setEmployeeId] = useState(initialEmployeeId || "");
  const [department, setDepartment] = useState(initialDepartment || "");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      
      const data: Parameters<NonNullable<typeof onNext>>[0] = {
        firstName,
        lastName,
        phone,
      };

      if (role === "STUDENT") {
        data.studentId = studentId;
        data.major = major;
      } else if (role === "STAFF") {
        data.employeeId = employeeId;
        data.department = department;
      }

      onNext?.(data);
    },
    [firstName, lastName, phone, role, studentId, major, employeeId, department, onNext]
  );

  return (
    <div className="flex flex-col gap-[var(--component-container-gap-spacious)] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[var(--component-container-gap-compact)]">
        <Text as="h2" level="h2" weight="semibold" align="center">
          Personal Information
        </Text>
        <Text size="small" color="secondary" align="center">
          Tell us a bit about yourself
        </Text>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[var(--component-container-gap-default)]"
      >
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          leadingIcon={UserIcon}
          required
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          leadingIcon={UserIcon}
          required
        />

        <Input
          type="tel"
          placeholder="Phone Number (Optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          leadingIcon={PhoneIcon}
        />

        {/* Student-specific fields */}
        {role === "STUDENT" && (
          <>
            <Input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              leadingIcon={IdIcon}
              required
            />
            <Input
              type="text"
              placeholder="Major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              leadingIcon={BookIcon}
              required
            />
          </>
        )}

        {/* Staff-specific fields */}
        {role === "STAFF" && (
          <>
            <Input
              type="text"
              placeholder="Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              leadingIcon={IdIcon}
              required
            />
            <Input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              leadingIcon={BookIcon}
              required
            />
          </>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[var(--component-page-gap-default)]">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onBack} 
            disabled={isLoading}
            className="flex-1 w-full sm:w-auto"
          >
            Back
          </Button>
          <Button 
            type="submit" 
            variant="primary" 
            isLoading={isLoading}
            disabled={isLoading}
            className="flex-1 w-full sm:w-auto"
          >
            Complete
          </Button>
        </div>
      </form>
    </div>
  );
});
