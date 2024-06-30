import type { ReactNode } from "react";

export type GlobalProviderTypes = {
  children: ReactNode
}

export type ContextProps = {
  menuBtn: boolean;
  setMenuBtn: React.Dispatch<React.SetStateAction<boolean>>;
}
