"use client";
import React, {  useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-toastify";
// import { Loader2Icon } from "lucide-react"
// import { useRouter } from "next/navigation";
// import Card from "@/shared/authCard";
// import styled from "styled-components";
// import AuthLayout from "../Authlayout";
// import { H3, } from "@/shared/heading/headingStyles";
// import { useMutation } from "@tanstack/react-query";
// import api from "@/services/api";
// import Input from "@/shared/Input";


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

const Verification: React.FC = () => {
    return (<div></div>)
};

export default Verification;

