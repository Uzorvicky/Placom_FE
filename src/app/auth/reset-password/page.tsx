"use client";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation";
import Card from "@/shared/authCard";
import styled from "styled-components";
import AuthLayout from "../Authlayout";
import { H3, } from "@/shared/heading/headingStyles";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import Input from "@/shared/Input";


interface VerifyForgotPasswordPayload {
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

const ResetPassword: React.FC = () => {
    const router = useRouter();
    const [password, setPass] = useState<string>('')
    const [conpass, setConPass] = useState<string>('')

    const mutation = useMutation<ApiResponse, ApiError, VerifyForgotPasswordPayload>({
        mutationFn: (payload) => api.verifyForgotPassword(payload)
    });

    const resendOtp = useMutation<ApiResponse, ApiError, ResendOtpPayload>({
        mutationFn: (payload) => api.resendOtp(payload)
    });
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    // const [inputError, setInputError] = useState<string | null>(null);
    const [btnText, setBtnText] = useState<string>("Continue");



    const handleSubmit = async (): Promise<void> => {

        const email = localStorage.getItem("reset_password_email");

        // If no email was found on local storage go back to /auth/forgotpassword
        if (!email) {
            return router.push('/auth/forgot-password');
        }

        try {
            const payload: VerifyForgotPasswordPayload = {
                email: email,
            };

            mutation.mutate(payload, {
                onSuccess: (data: ApiResponse) => {
                    setIsSuccess(true);
                    toast.success(data?.message);
                    // router.push("/auth/reset-password");
                    router.push("/auth/verified");
                },
                onError: (error: ApiError) => {
                    const errorMessage = error?.message || "reset password failed";
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
                        <span className="text-[#535353] font-bold" style={{
                            fontSize: "24px",
                            padding: "0 1.5rem",
                            lineHeight: "31px",
                            textAlign: "center",
                        }}>{"Reset Password"}</span>
                        <H3 style={{ fontSize: "16px" }}>{"Your new password must be different from previous used passwords"}</H3>
                    </div>

                    <div className="flex flex-col space-y-3 w-full">
                        <Input
                            type={"password"}
                            name="password"
                              value={password}
                            placeholder={"Password"}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
                        />
                         <Input
                            type={"password"}
                            name="conpassword"
                            //   error={confirmPasswordError}
                              value={conpass}
                            placeholder={"Confirm Password"}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConPass(e.target.value)}
                        />
                        </div>
                    <div className="space-y-2 flex-col mt-4 w-full flex /justify-center">
                        <Button
                            variant={'primary'}
                            size={'lg'}
                            className="w-full bg-[#0F6862] rounded-none !py-6 px-4 text-lg"
                            onClick={handleSubmit}
                        >

                            {mutation.isPending ? <Loader2Icon className="animate-spin" /> : false}
                            {"Continue"}
                        </Button>

                    </div>
                </Card>
            </VerifyForgotPasswordWrapper>
        </AuthLayout>
    );
};

export default ResetPassword;

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