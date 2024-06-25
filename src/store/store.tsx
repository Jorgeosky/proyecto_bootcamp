import React, { useContext, useReducer, useMemo } from 'react';
import reducer from './reducer';
import exportState from './state';

const Store = React.createContext<{ state?: any; dispatch?: any }>({});

export function StoreProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(reducer, exportState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export function useDispath() {
  const { dispatch } = useContext(Store);
  return dispatch;
}

export function useSelector(callback: any) {
  const { state } = useContext(Store);
  return callback(state);
}

export default Store;
