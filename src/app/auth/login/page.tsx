'use client'
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState, useEffect, useCallback } from "react";
import api from "@/services/api";
import { Loader2Icon } from "lucide-react"
import Link from "next/link";
import Input from "@/shared/Input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from "../Authlayout";
import { H1, H3 } from "@/shared/heading/headingStyles";
import { isValidEmail } from "@/services/utils";
import { Loader, LoaderLine } from "@/shared/authCard/cardStyles";
import { ErrorResponse, LoginResponse, } from "@/types/index"
import {
  More,
  Absolute,
  ErrorText,
  Guidelines,
  StyledImage,
  ImageWrapper,
  ButtonWrapper,
  LoginForm as SignUpForm,
  LoginWrapper as SignUpWrapper,
} from "../login/loginStyle";

import { LoginUser } from "@/services/apis/auth"



// Type definitions
interface User {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  data?:object
}

interface ApiError {
  message?: string;
  data?: {
    verified?: boolean;
  };
  response?: {
    data?: {
      message?: string;
      verified?: boolean;

    };
  };
}

const Login: React.FC = () => {
      const [email, setEmail] = useState<string>("");
      const [adhere, setAdhere] = useState<boolean>(false)
      const [password, setPassword] = useState<string>("");
        const [emailError, setEmailError] = useState<boolean>(false);
        const [passwordError, setPasswordError] = useState<boolean>(false);

        const mutation = useMutation<LoginResponse, ErrorResponse, User>({
            mutationFn: ({ email, password,}: User): Promise<LoginResponse> => LoginUser(email, password),    // onError: (error: ErrorResponse) => {
          });

        const handleSubmit = async (): Promise<void> => {
      
          // Input fields checks
          if (!email?.trim()) {
            setEmailError(true);
          } else if (isValidEmail(email) === false) {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
      
          if (!password?.trim()) {
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }
      
      
          // Don't trigger the create account API if the params are not met
          if (
            !email?.trim() ||
            !password?.trim() ||
            isValidEmail(email) === false ) {
            return;
          }
      
      
          const payload: User = {
            email: email,
            password: password,
          };
      
          try {
            // Make a request to the register endpoint
            await mutation.mutateAsync(payload, {
              onSuccess: (data: ApiResponse) => {
                if (data) {
                  toast(data?.message, {
                    hideProgressBar: true,
                    autoClose: 800,
                    type: "success",
                  });
      
                  // Redirect to verify account
                //   router.push("/auth/verification");
                }
              },
              onError: (error: ErrorResponse) => {
                toast(error?.message || "Something went wrong! Please try again.", {
                  hideProgressBar: true,
                  autoClose: 1000,
                  type: "error",
                });
      
                // When the error message is account verification issue
                // if (error?.data?.verified === false) {
                //   router.push("/auth/login");
                // }
              },
            });
      
            // Store the user email in local storage to use it on otp page
            localStorage.setItem("email", email);
          } catch (error: unknown) {
            // Handle login error
            const apiError = error as ApiError;
            toast(apiError?.response?.data?.message || "An error occurred", {
              hideProgressBar: true,
              autoClose: 800,
              type: "error",
            });
          }
        };
  return (
    <AuthLayout register={true}>
      <SignUpWrapper>
        <SignUpForm>
          <form className="form relative" onSubmit={handleSubmit}>
            <div
              className={`${mutation.isPending ? "flex" : "hidden"
                } absolute top-0 left-0 bg-[#ffffff56] h-full w-full z-10`}
            >
              <Loader>
                <LoaderLine></LoaderLine>
              </Loader>
            </div>
            <div className="w-full flex flex-col space-y-1 mb-2">
              <H1>{"Welcome back"}</H1>
              <H3>{"Get back into your account"}</H3>
            </div>

              <Input
                name="email"
                type="text"
                value={email}
                placeholder={"Email address or phone number"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            <div style={{ margin: "10px 0", width: "100%" }}>
              <Input
                name="password"
                type={"password"}
                error={passwordError}
                value={password}
                placeholder={"Type a password"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              {passwordError && (
                <ErrorText>Password must be at least 8 characters</ErrorText>
              )}
            </div>

               
              <div className="-font-work-sans flex !items-start !justify-start p-1 w-full">
                <Link
                  className="text-[#0F6862] pl-1 text-sm underline"
                  href={"/auth/forgot-password"}
                >
                  {"Forgot Password"}
                </Link>
              </div>


            <ButtonWrapper className="mt-2">
              <Button
                variant={'primary'}
                size={'lg'}
                className="w-full bg-[#0F6862] rounded-none !py-6 px-4 text-lg"
                onClick={() => handleSubmit()}
              >{ "Login"}</Button>
              <div className="mt-10 flex items-end justify-end ">
                You {"don't"} have an account?
                <Guidelines href={"/auth/register"}> Create Account</Guidelines>
              </div>
            </ButtonWrapper>

          </form>
        </SignUpForm>
        <ImageWrapper >
          <div className="overlay"></div>
          <StyledImage className="" alt="#" src={"/assets/Image.png"} fill />
          <Absolute className="overflow-hidden pr-42">
            <div>Did you know?</div>
            <div>
              Farmers will have to grow 70 percent more food than what is
              currently produced to feed the world's growing population by 2050.
            </div>
            <More>see more facts</More>
          </Absolute>
        </ImageWrapper>
      </SignUpWrapper>
    </AuthLayout>
  );
}

export default Login