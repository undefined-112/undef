import React, { createContext, useState, useContext } from 'react';

const TokenStateContext = createContext();
const TokenDispatchContext = createContext();

function TokenProvider({ children }) {
  const [state, setState] = useState(null);

  return (
    <TokenStateContext.Provider value={state}>
      <TokenDispatchContext.Provider value={setState}>
        {children}
      </TokenDispatchContext.Provider>
    </TokenStateContext.Provider>
  );
}

function useTokenState() {
  const context = useContext(TokenStateContext);
  if (context === undefined) {
    throw new Error('useToken muse be used within TokenProvider context');
  }

  return context;
}

function useTokenDispatch() {
  const context = useContext(TokenDispatchContext);
  if (context === undefined) {
    throw new Error('useToken muse be used within TokenProvider context');
  }

  return context;
}

function useToken() {
  return [useTokenState(), useTokenDispatch()];
}

export { TokenProvider };
export default useToken;
