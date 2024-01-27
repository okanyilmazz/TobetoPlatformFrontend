import LoginRequest from "../models/requests/auth/loginRequest";
import { AxiosResponse } from "axios";
import LoginResponse from "../models/responses/auth/loginResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class AuthService{
    login(request: LoginRequest): Promise<AxiosResponse<LoginResponse, any>> {
        return axiosInstance.post<LoginResponse>("Auth/Login", request);
    }
}

export default new AuthService()