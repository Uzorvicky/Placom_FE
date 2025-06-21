"use client";
import { useCallback, useEffect, useState } from "react";
import UseOTP from "@/hooks/useOTP";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation";
import Card from "@/shared/authCard";
import styled from "styled-components";
import AuthLayout from "../Authlayout";
import {  H3, } from "@/shared/heading/headingStyles";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import { MouseEvent, } from "react";


interface VerifyForgotPasswordPayload {
    otp: string;
    email: string;
}

interface ResendOtpPayload {
    email: string;
}

interface ApiResponse {
    message: string;
}

interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}

const VerifyForgotPassword: React.FC = () => {
    const router = useRouter();
    const [finalValue, setFinalValue] = useState<string>('')

    const mutation = useMutation<ApiResponse, ApiError, VerifyForgotPasswordPayload>({
        mutationFn: (payload) => api.verifyForgotPassword(payload)
    });

    const resendOtp = useMutation<ApiResponse, ApiError, ResendOtpPayload>({
        mutationFn: (payload) => api.resendOtp(payload)
    });
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [inputError, setInputError] = useState<string | null>(null);
    const [btnText, setBtnText] = useState<string>("Continue");
    const [time, setTime] = useState<number>(300); // 5 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        // Clean up the timer when the component is unmounted
        return () => clearInterval(timer);
    }, [time]);

    const formatTime = useCallback((time: number): string => {
        if (time > 0) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            return `Code expires in ${minutes}:${seconds.toString().padStart(2, "0")}`;
        }
        return `Code expired...`;
    }, []);

    const handleResendOtp = async (e: MouseEvent<HTMLAnchorElement>): Promise<void> => {
        e.preventDefault();
        const email = localStorage.getItem("reset_password_email");

        if (!email) {
            toast.error("Email not found. Please go back to forgot password.");
            return;
        }

        try {
            resendOtp.mutate(
                { email: email },
                {
                    onSuccess: ({ message }: ApiResponse) => {
                        toast.success(message);
                    },
                    onError: (error: ApiError) => {
                        console.log(error, ":ERROR RESPONSE resend");
                        toast.error(error?.message || "Failed to resend OTP");
                    },
                }
            );
        } catch (error) {
            const err = error as ApiError;
            toast.error(err?.message || "Failed to resend OTP");
        }
    };

    const handleSubmit = async (): Promise<void> => {

        if (finalValue?.length < 6) {
            setInputError("Please enter your OTP");
            return;
        }

        const email = localStorage.getItem("reset_password_email");

        // If no email was found on local storage go back to /auth/forgotpassword
        if (!email) {
            return router.push('/auth/forgot-password');
        }

        try {
            const payload: VerifyForgotPasswordPayload = {
                otp: finalValue,
                email: email,
            };

            mutation.mutate(payload, {
                onSuccess: (data: ApiResponse) => {
                    setIsSuccess(true);
                    toast.success(data?.message);
                    // Redirect user to reset password
                    // router.push("/auth/reset-password");
                     router.push("/auth/verified");
                },
                onError: (error: ApiError) => {
                    const errorMessage = error?.message || "Verification failed";
                    setBtnText(errorMessage);
                    setTimeout(() => {
                        setBtnText("Continue");
                    }, 2000);

                    toast.error(errorMessage);
                },
            });
        } catch (error) {
            const err = error as ApiError;
            toast.error(err?.message || "Error verifying OTP, Try again");
            setBtnText("Error! Try Again");
            setTimeout(() => {
                setBtnText("Continue");
            }, 2000);
        }
    };



    return (
        <AuthLayout register={true}>
            <VerifyForgotPasswordWrapper>
                <Card
                    isLoading={mutation.isPending}
                >
                    <div className="w-full flex flex-col space-y-4 mb-5 md:mb-10 text-[#535353]">
                        <span style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            padding: "0 2rem",
                            lineHeight: "30px",
                            textAlign: "center",
                        }}>{"Enter the One   Time Passcode sent to your Mail"}</span>
                        <H3 style={{ fontSize: "17px" }}>{"Please enter the code below"}</H3>
                    </div>
                    <UseOTP
                        onComplete={(x) => setFinalValue(x)}
                    />
                    {inputError !== null && (
                        <div className="flex justify-start w-full mb-3">
                            <p className="text-sm text-red-800">{inputError}</p>
                        </div>
                    )}
                    <Section className="mt-1">
                        <Link
                            className="text-[#1B7B44]"
                            onClick={handleResendOtp}
                            href="#">
                            Resend code?
                        </Link>
                        <span className="expire-text text-[#000]">
                            {formatTime(time)}
                        </span>
                    </Section>
                    <ButtonWrapper className="space-y-2">
                        <Button
                            variant={'primary'}
                            size={'lg'}
                            className="w-full bg-[#0F6862] rounded-none !py-6 px-4 text-lg"
                            disabled={time <= 0}
                            onClick={handleSubmit}
                        >
                            {/* {false ?
                                "Verifying your account..." : btnText} */}
                            {mutation.isPending ? <Loader2Icon className="animate-spin" /> : false}
                            {btnText}
                        </Button>

                        <Button
                            disabled={mutation.isPending}
                            size={'md'}
                            className="bg-[#535353] text-white rounded-none !py-5 px-4"
                            onClick={() => router.back()}>{"Back"}</Button>
                    </ButtonWrapper>
                </Card>
            </VerifyForgotPasswordWrapper>
        </AuthLayout>
    );
};

export default VerifyForgotPassword;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const VerifyForgotPasswordWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding-top: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    flex: 1;
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  color: #0F6862;
`;