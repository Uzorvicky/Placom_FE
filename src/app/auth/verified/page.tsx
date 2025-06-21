"use client";
import { useEffect, } from "react";
import { useRouter } from "next/navigation";
import Card from "@/shared/authCard";
import AuthLayout from "../Authlayout";
import {VerifyForgotPasswordWrapper} from'@/components/styled/VerifyForgotPasswordWrapper'

const Page: React.FC = () => {
    const router = useRouter()

useEffect(() => {
  const timer = setTimeout(() => {
    router.push("/auth/login");
  }, 2500); // 2500ms = 2. seconds

  return () => clearTimeout(timer); // Cleanup on unmount
}, [router]); // Dependency array


    return (
        <AuthLayout register={true}>
            <VerifyForgotPasswordWrapper>
                <Card className="mx-auto flex flex-col space-y-2">
                    <div><span>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#fff" }} width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-circle-check-icon lucide-circle-check  bg-[#0F6862] rounded-full ">
                            <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    </span></div>
                    <div>
                        <span className="text-[#181818] font-inter font-bold text-3xl">Your account has been successfully verified.</span>
                    </div>
                </Card>
            </VerifyForgotPasswordWrapper>
        </AuthLayout>
    );
}
export default Page