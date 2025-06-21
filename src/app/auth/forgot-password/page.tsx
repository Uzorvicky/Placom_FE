"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState, useEffect, useCallback } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import api from "@/services/api";
import Input from "@/shared/Input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from "../Authlayout";
import { H1, H3 } from "@/shared/heading/headingStyles";
import { isValidEmail } from "@/services/utils";
import { Loader, LoaderLine } from "@/shared/authCard/cardStyles";
import { ErrorResponse, RegisterResponse, Response } from "@/types/index"
import { RecoverUser } from "@/services/apis/auth"
import {
  More,
  Agree,
  Text,
  Line,
  Divider,
  Absolute,
  ErrorText,
  Guidelines,
  StyledImage,
  ImageWrapper,
  ButtonWrapper,
  LoginForm as SignUpForm,
  LoginWrapper as SignUpWrapper,
} from "../login/loginStyle";

// Type definitions
interface User {
  email: string;
 
}

interface ApiResponse {
  message: string;
  data?: {
    verified?: boolean;
  };
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


const useRecoverMutation = () => {
  return useMutation<Response, ErrorResponse, User>({
    mutationFn: ({ email, }: User): Promise<Response> => RecoverUser(email),    // onError: (error: ErrorResponse) => {
  });
};

const ForgotPassword: React.FC = () => {

  const { mutateAsync, isPending } = useRecoverMutation()


  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [adhere, setAdhere] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false);
  const [btnName, setBtnName] = useState<string>("Recover Account");




  const handleSubmit = async (): Promise<void> => {
    // e.preventDefault();

    // Input fields checks
    if (!email?.trim()) {
      setEmailError(true);
    } else if (isValidEmail(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Don't trigger the create account API if the params are not met
    if (
      !email?.trim() || isValidEmail(email) === false
    ) {
      return;
    }


    const payload: User = {
      email: email,
    };

    try {
      // Make a request to the register endpoint
      await mutateAsync(payload, {
        onSuccess: (data: ApiResponse) => {
          if (data) {
            setBtnName("Account Created Successfully!");
            toast(data?.message, {
              hideProgressBar: true,
              autoClose: 800,
              type: "success",
            });

            // Redirect to verify account
            router.push("/auth/verification");
          }
        },
        onError: (error: ErrorResponse) => {
          setBtnName("Create Account");
          toast(error?.message || "Something went wrong! Please try again.", {
            hideProgressBar: true,
            autoClose: 1000,
            type: "error",
          });

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

  // if (status === "authenticated") return redirect("/market");

  return (
    <AuthLayout register={true}>
      <SignUpWrapper>
        <SignUpForm>
          <form className="form relative" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col space-y-1 mb-2">
              <H1>{"Forgot Password?"}</H1>
              <H3>{"We Will send you a mail to help recover your Password"}</H3>
            </div>

              <Input
                name="email"
                error={emailError}
                type="text"
                value={email}
                placeholder={"Email address"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />

   
            {emailError && <ErrorText>Please enter a valid email</ErrorText>}
          
            <div className="flex flex-row gap-2  mt-5  !items-start !justify-start p-1 w-full">
                <Checkbox
                checked={adhere}
                defaultChecked={adhere} 
                className="data-[state=checked]:border-green-900 border-2 data-[state=checked]:bg-teal-800 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-teal-700"
                onClick={() =>  setAdhere(!adhere)}
                onCheckedChange={(checked) => {
                  return checked
                }
                }
                 />
              <div className="-font-work-sans col-span-2 flex items-start justify-start">
                <p className="text-[#000] text-sm">
                  I agree to adhere to
                </p>
                <Link
                  className="text-[#0F6862] pl-1 text-sm underline"
                  href={"/privacy-policy"}
                >
                  {"PLACOM Privacy Policy"}
                </Link>
              </div>
            </div>
            <ButtonWrapper className="mt-2">
              <Button
                variant={'primary'}
                size={'lg'}
                className="w-full bg-[#0F6862] rounded-none !py-6 px-5 text-lg"
                onClick={() => handleSubmit()}
              >{"Recover Account"}</Button>

               <div className="mt-10 flex items-end justify-end ">
                Already have an account?
                <Guidelines href={"/auth/login"}> Log in</Guidelines>
              </div>
              
            </ButtonWrapper>

          </form>
        </SignUpForm>
        <ImageWrapper >
          <div className="overlay"></div>
          <StyledImage className="" alt="#" src={"/assets/Image.png"} fill />
          <Absolute className="overflow-hidden pr-43">
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
};

export default ForgotPassword;