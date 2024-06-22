import { FC, ReactNode, createContext, useState } from "react";

export type AppContextType = {
  count: number;
  increase: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);
  return (
    <AppContext.Provider value={{ count, increase }}>
      {children}
    </AppContext.Provider>
  );
};
