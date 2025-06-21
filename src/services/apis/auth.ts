import api from "../api";
import { LoginResponse, ErrorResponse, RegisterResponse, Response } from "@/types";
import { store } from "@/store";
import { toast } from "react-toastify";
// import { setAuthToken, setUser } from "@/store/slices/authSlices";

export async function LoginUser(
  email: string,
  password: string,
  // role:string | undefined,
  // invite_passcode:string | undefined
): Promise<LoginResponse> {
  const response = await api.post(`users/auth`, { email, password});

  try {
    response as LoginResponse;
    if (!response.status) {
      toast.error(response?.message);
      return response;
    }
     toast.success(response?.message);

    return response;
  } catch {
   return response
  }
}


export async function RegisterUser(
  email: string,
  password: string,
  role:string | undefined,
  invite_passcode:string | undefined
): Promise<RegisterResponse> {
  const response = await api.post(`users/auth`, { email, password, role, invite_passcode});

  try {
    response as RegisterResponse;
    if (!response.status) {
      toast.error(response?.message);
      return response;
    }
     toast.success(response?.message);

    return response;
  } catch {
   return response
  }
}


export async function RecoverUser(
  email: string,
): Promise<Response> {
  const response = await api.post(`users/auth/recover`, { email,});

  try {
    response as Response;
    if (!response.status) {
      toast.error(response?.message);
      return response;
    }
     toast.success(response?.message);

    return response;
  } catch {
   return response
  }
}