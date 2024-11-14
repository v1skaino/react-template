import { AxiosError } from 'axios';

export const executeOnServerError = (error: unknown, task: (resData: { statusCode: number; message: string; error?: string }, err: AxiosError) => void) => {
  try {
    if (!(error instanceof AxiosError)) return task({ statusCode: 500, message: 'Ocorreu um erro interno!' }, new AxiosError('Internal Erro', '500'));
    return task(error.response?.data, error);
  } catch {
    task({ statusCode: 500, message: 'Ocorreu um erro interno!' }, new AxiosError('Internal Erro', '500'));
  }
};
