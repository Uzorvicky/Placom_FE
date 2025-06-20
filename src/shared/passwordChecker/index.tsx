import React from "react";

interface PasswordStrengthCheckerProps {
  password: string;
  checkStatus?: (isValid: boolean) => void;
}

interface PasswordStrengthResult {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  specialChar: boolean;
  lengthValid: boolean;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
  checkStatus
}) => {

  const checkPasswordStrength = (): PasswordStrengthResult => {

    if (password.trim() === '') {
       if (checkStatus) {
      checkStatus(false);
    }

      return {
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
        lengthValid: false,
      };

    }


    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const isLengthValid = password.length >= 8;

    if (checkStatus) {
      checkStatus(
        hasLowercase &&
        hasNumber &&
        hasUppercase &&
        hasSpecialChar &&
        isLengthValid
      );
    }

    return {
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
      lengthValid: isLengthValid,
    };
  };

  const passwordStrength = checkPasswordStrength();

  return (
    <div className="pl-5 mt-2 w-full">
      <ul className="list-disc text-xs">
        <li
          className={
            passwordStrength.uppercase ? "text-green-700" : "text-red-700"
          }
        >
          Uppercase: {passwordStrength.uppercase ? "Pass" : "Fail"}
        </li>
        <li
          className={
            passwordStrength.lowercase ? "text-green-700" : "text-red-700"
          }
        >
          Lowercase: {passwordStrength.lowercase ? "Pass" : "Fail"}
        </li>
        <li
          className={
            passwordStrength.number ? "text-green-700" : "text-red-700"
          }
        >
          Number: {passwordStrength.number ? "Pass" : "Fail"}
        </li>
        <li
          className={
            passwordStrength.specialChar ? "text-green-700" : "text-red-700"
          }
        >
          Special Character: {passwordStrength.specialChar ? "Pass" : "Fail"}
        </li>
        <li
          className={
            passwordStrength.lengthValid ? "text-green-700" : "text-red-700"
          }
        >
          Minimum Length: {passwordStrength.lengthValid ? "Pass" : "Fail"}
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;