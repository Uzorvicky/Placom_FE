"use client"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState, useEffect } from "react"

interface otpProps {
    //   finalValue?: (value?: string) => void;
    onComplete?: (value: string) => void;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

const UseOTP: React.FC<otpProps> = ({
    onComplete,
    onChange,
    autoFocus = true }) => {
    const [value, setValue] = useState<string>("");

    // Optional: Handle external value changes
    useEffect(() => {
        onChange?.(value);
    }, [value, onChange]);

    return (<div className="w-full flex justify-center items-center">
        <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={value}
            onChange={(val) => setValue(val)}
            onComplete={onComplete}
            autoFocus={autoFocus}
        >
            <InputOTPGroup className="gap-3">
                {[...Array(6)].map((_, index) => (
                    <InputOTPSlot
                        key={index}
                        index={index}
                        className="rounded-md border p-1 !bg-white"
                    />
                ))}
            </InputOTPGroup>
        </InputOTP>
    </div>)
}

export default UseOTP