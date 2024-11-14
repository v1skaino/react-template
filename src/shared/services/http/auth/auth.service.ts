import { AxiosResponse } from 'axios';
import { http } from '../instance';
import { ILoginReqModel } from './models/request/request.models';
import { ILoginResModel } from './models/response/response.models';

class AuthService {
  async login(reqBody: ILoginReqModel): Promise<AxiosResponse<ILoginResModel>> {
    const response: AxiosResponse<ILoginResModel> = await http.post('/auth/login', reqBody);
    return response;
  }
}

export default AuthService;
