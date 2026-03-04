import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type SidePanelContextType = {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>
};
const initialState: SidePanelContextType ={
    isSidePanelOpen: false,
    setIsSidePanelOpen: () => {}
}

export const SidePanelContext = createContext<SidePanelContextType>(initialState);

export const SidePanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  return (
    <SidePanelContext.Provider value={{ isSidePanelOpen, setIsSidePanelOpen }}>
      {children}
    </SidePanelContext.Provider>
  );
}
export const useSidePanel = () => {
  const context = useContext(SidePanelContext)
  if (!context) throw new Error("useSidePanel must be used within a SidePanelProvider")
  return context
}