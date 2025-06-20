import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { getSession } from "next-auth/react";

/**
 * Returns the base URL for the API based on the current environment.
 */
const baseURL = process.env.NEXT_PUBLIC_BASE_URL_DEV;

interface ApiResponse<T = any> {
  data?: T;
  error?: {
    message: string;
    code?: string;
    status?: number;
    data?: any;
    originalError?: AxiosError;
  };
}

interface ApiConfig extends AxiosRequestConfig {
  req?: any;
}

class BaseApi {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 180000, // 3 minutes
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeInterceptors();
  }

  private initializeInterceptors(): void {
    // Request interceptor
    // this.instance.interceptors.request.use(
    //   async (config: ApiConfig) => {
    //     const session = await getSession({ req: config.req });

    //     if (
    //       session?.access_token &&
    //       !["/auth/login", "/auth/register"].includes(config.url || "")
    //     ) {
    //       config.headers = config.headers || {};
    //       config.headers["Authorization"] = `Bearer ${session.access_token}`;
    //     }
    //     return config;
    //   },
    //   (error: AxiosError) => Promise.reject(`${error},"ERROR in Interceptor"`)
    // );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('API Error:', {
            config: error.config,
            response: error.response,
            message: error.message,
            stack: error.stack
          });
        }

        let errorMessage = 'An unexpected error occurred';

        if (error.code === 'ECONNABORTED') {
          errorMessage = 'Request timeout. Please try again.';
        } else if (error.response) {
          switch (error.response.status) {
            case 401:
              errorMessage = 'Unauthorized - Please login again';
              break;
            case 403:
              errorMessage = 'Forbidden - You lack necessary permissions';
              break;
            case 404:
              errorMessage = 'Resource not found';
              break;
            case 429:
              errorMessage = 'Too many requests - Please slow down';
              break;
            case 500:
              errorMessage = 'Server error - Please try again later';
              break;
            default:
              errorMessage = error.response.data?.message || 
                `Request failed with status ${error.response.status}`;
          }
        } else if (error.request) {
          errorMessage = 'Network error - Please check your connection';
        }

        return Promise.reject({
          message: errorMessage,
          code: error.code,
          status: error.response?.status,
          data: error.response?.data,
          originalError: process.env.NODE_ENV === 'development' ? error : undefined
        });
      }
    );
  }

  /**
   * GET request
   * @param endpoint API endpoint
   * @param config Axios config
   */
  async get<T = any>(endpoint: string, config?: ApiConfig): Promise<T> {
    try {
      const response = await this.instance.get<T>(endpoint, config);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * POST request
   * @param endpoint API endpoint
   * @param data Request payload
   * @param config Axios config
   */
  async post<T = any>(endpoint: string, data?: any, config?: ApiConfig): Promise<T> {
    try {
      const response = await this.instance.post<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * PATCH request
   * @param endpoint API endpoint
   * @param data Request payload
   * @param config Axios config
   */
  async patch<T = any>(endpoint: string, data?: any, config?: ApiConfig): Promise<T> {
    try {
      const response = await this.instance.patch<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * PUT request
   * @param endpoint API endpoint
   * @param data Request payload
   * @param config Axios config
   */
  async put<T = any>(endpoint: string, data?: any, config?: ApiConfig): Promise<T> {
    try {
      const response = await this.instance.put<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * DELETE request
   * @param endpoint API endpoint
   * @param config Axios config
   */
  async delete<T = any>(endpoint: string, config?: ApiConfig): Promise<T> {
    try {
      const response = await this.instance.delete<T>(endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Authentication methods
  async createAccount(data: { role?: string; [key: string]: any }): Promise<any> {
    try {
      const endpoint =  "users/auth";
      const response = await this.instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async login(data: { role?: string; [key: string]: any }): Promise<any> {
    try {
      const endpoint = data.role === "farmer" 
        ? "users/auth?role=farmer" 
        : "users/auth";
      const response = await this.instance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async verification(data: any): Promise<any> {
    try {
      const response = await this.instance.post("users/otp", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  async verifyForgotPassword(data: any): Promise<any> {
    try {
      const response = await this.instance.post("users/password/verify-otp", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async resendOtp(data: any): Promise<any> {
    try {
      const response = await this.instance.post("users/resend-otp", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async forgotPasswordOtp(data: any): Promise<any> {
    try {
      const response = await this.instance.post("users/password/otp", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(data: any): Promise<any> {
    try {
      const response = await this.instance.put("users/reset-password", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }



  async getUser(userId: string): Promise<any> {
    try {
      const response = await this.instance.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCorpUser(): Promise<any> {
    try {
      const response = await this.instance.get(`/corporate`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchCorpRoles(): Promise<any> {
    try {
      const response = await this.instance.get(`/startup/corproles`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createCorpUser(payload: { corpId: string; [key: string]: any }): Promise<any> {
    try {
      const response = await this.instance.post(
        `/corporate/${payload.corpId}/users`,
        payload
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchCorpUsers(): Promise<any> {
    try {
      const response = await this.instance.get(`/corporate/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchSingleUser(userId: string): Promise<any> {
    try {
      const response = await this.instance.get(`/corporate/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCorpSampleUser(): Promise<any> {
    try {
      const response = await this.instance.get(`/corporate`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const api = new BaseApi();
export default api;