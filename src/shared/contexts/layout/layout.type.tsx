import React, { Dispatch, SetStateAction } from 'react';

type LayoutStateType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  notify: (type: 'error' | 'success' | 'warning' | 'info', title: string, subtitle?: string) => void;
};

type LayoutProviderType = {
  children: React.ReactNode;
};

export type { LayoutProviderType, LayoutStateType };
