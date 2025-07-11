"use client";
import React, {  useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation";
import Card from "@/shared/authCard";
import AuthLayout from "../Authlayout";
import { H3, } from "@/shared/heading/headingStyles";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import Input from "@/shared/Input";
import {VerifyForgotPasswordWrapper} from'@/components/styled/VerifyForgotPasswordWrapper'

interface ResetPasswordPayload {
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

    const mutation = useMutation<ApiResponse, ApiError, ResetPasswordPayload>({
        mutationFn: (payload) => api.verifyForgotPassword(payload)
    });

 



    const handleSubmit = async (): Promise<void> => {

        const email = localStorage.getItem("reset_password_email");

        // If no email was found on local storage go back to /auth/forgotpassword
        if (!email) {
            return router.push('/auth/forgot-password');
        }

        try {
            const payload: ResetPasswordPayload = {
                email: email,
            };

            mutation.mutate(payload, {
                onSuccess: (data: ApiResponse) => {
                    toast.success(data?.message);
                    router.push("/auth/login");
                },
                onError: (error: ApiError) => {
                    const errorMessage = error?.message || "reset password failed";
                    toast.error(errorMessage);
                },
            });
        } catch (error) {
            const err = error as ApiError;
            toast.error(err?.message || "Error verifying OTP, Try again");
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

// export default ResetPassword;

export default function ResetPage() {
  return (
    <Suspense  fallback={<div className='h-screen w-full flex flex-col justify-center items-center'><Loader2Icon className='animate-spain h-10 w-10'/></div>}>
      <ResetPassword />
    </Suspense>
  );
}