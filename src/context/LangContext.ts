import { createContext, useContext } from "react";

export type Lang = "en" | "zh";

export const LangContext = createContext<Lang>("en");

export const useLang = () => useContext(LangContext);