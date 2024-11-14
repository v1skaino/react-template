import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { clearCookie, getCookies } from './cookies/cookies';

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getCookies('@yehFitAPP_Cookie');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: unknown): Promise<AxiosResponse> => {
  if (!(error instanceof AxiosError)) return Promise.reject(error);

  if (error?.response?.status == 403 && (error.response?.data?.error === 'Token Expirado' || error.response?.data?.message === 'Token Expirado')) {
    clearCookie('@yehFitAPP_Cookie');
    window.location.reload();
  }

  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export { setupInterceptorsTo };
