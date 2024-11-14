import { createContext, useMemo, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { LayoutProviderType, LayoutStateType } from './layout.type';

export const LayoutStateCtx = createContext<LayoutStateType>({} as LayoutStateType);

const LayoutProvider = ({ children }: LayoutProviderType) => {
  const [loading, setLoading] = useState<boolean>(false);

  const notify = (type: 'error' | 'success' | 'warning' | 'info', title: string, subtitle?: string) =>
    toast[type](title, {
      description: subtitle,
      style: { padding: '10px 6px' },
      duration: 2500,
    });

  const layoutProviderValues: LayoutStateType = useMemo(
    () => ({
      loading,
      setLoading,
      notify,
    }),
    [loading, setLoading],
  );

  return (
    <LayoutStateCtx.Provider value={layoutProviderValues}>
      <Toaster richColors position="top-right" />
      {loading && <h1>Loading...</h1>}
      {children}
    </LayoutStateCtx.Provider>
  );
};

export { LayoutProvider };
