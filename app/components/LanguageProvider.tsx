"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type LanguageContextType = {
  language: string;
  changeLanguage: (value: string) => void;
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("vi");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  function changeLanguage(value: string) {
    setLanguage(value);
    localStorage.setItem("language", value);
  }

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}