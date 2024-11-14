import useLayout from '@/shared/hooks/useLayout';
import { executeOnServerError } from '@/shared/utils/executeOnServerError';
import { AxiosInstance } from 'axios';
import { http } from './instance';

interface IPerformRequestWithHandlers {
  onRequest?: (instance: AxiosInstance, throwMessage: (message?: string) => void) => Promise<void>;
  onError?: (err: unknown) => Promise<void>;
  onFinish?: () => Promise<void>;
  setCustomLoader?: (state: boolean) => void;
  showErrorMessage?: boolean;
}

export default function useAPI() {
  const { setLoading, notify } = useLayout();

  const voidFnct = async () => {};

  const setLoader = (state: boolean, setCustomLoader?: (state: boolean) => void) => {
    if (!setCustomLoader) return setLoading(state);
    setCustomLoader(state);
  };

  const performRequestWithHandlers = async (handlers: Readonly<IPerformRequestWithHandlers>) => {
    const { onError = voidFnct, onFinish = voidFnct, onRequest = voidFnct, showErrorMessage = true, setCustomLoader } = handlers;

    try {
      setLoader(true, setCustomLoader);
      await onRequest(http, (message) => notify('success', 'Sucesso', message));
    } catch (err) {
      await onError(err);
      if (showErrorMessage) executeOnServerError(err, (resData) => notify('error', 'Error', resData?.message));
    } finally {
      await onFinish();
      setLoader(false, setCustomLoader);
    }
  };

  return { performRequestWithHandlers };
}
