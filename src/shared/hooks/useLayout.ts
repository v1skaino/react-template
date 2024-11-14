import { useContext } from 'react';
import { LayoutStateCtx } from '../contexts/layout/layout.ctx';

export default function useLayout() {
  return useContext(LayoutStateCtx);
}
