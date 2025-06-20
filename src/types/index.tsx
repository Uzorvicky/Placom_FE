// types/next-auth.d.ts

// declare module "next-auth" {
//     interface Session {
//         user: {
//             _id: string;
//             name?: string | null;
//             email?: string | null;
//             // Add any other custom fields you use in your session
//         };

//     }
// }
export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  access_token: string | null;
};

export type User = {
  _id: string;
  email: string;
  first_name: string,
  last_name: string,
  verified: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
} 


export type Corporate = {
  _id: string;
  corporate_name: string;
  country: object;
  lga: object;
  state: string;
  plan: string;
  contact_address: string

};

export type Parent = [{
  _id?: string;
  email?: string;
  role?: object;
  corp_id?: object
}];

export interface SignInResponse {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

export type LoginResponse = {
  status: boolean;
  message: string;
  data?: {
    access_token?: string | undefined;
    user: User;
    corporateEntity: Corporate;
    parent: Parent;
  };
};

export type RegisterResponse = {
  status: boolean;
  message: string;
  data?: object
};

export type SessionState = {
    isLoading: boolean;
    data: SessionResponse | null;
    error: Error | null;
};

export type SessionResponse = {
  access_token?: string;
  user?: User;
  corporateEntity?: Corporate;
  parent?: Parent;
  expires_in?: number; // Common in token responses
  token_type?: 'Bearer'; // Typically Bearer tokens
  refresh_token?: string; // For token rotation
} | null;

export type ErrorResponse = {
  status?: boolean;
  message?: string;
  status_code?: number;
  data?: string
};