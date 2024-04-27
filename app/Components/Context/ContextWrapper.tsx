"use client";
import React, { useContext, useState } from "react";

import {
  ThemeContext,
  LanguageContext,
} from "@/app/Components/Context/ContextProviders";

// END OF IMPORTS

const ContextWrapper = ({ children }: any) => {
  // console.log(child);
  const [language, setLanguage] = useState<string>("en");
  const [theme, setTheme] = useState<string>("System");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextWrapper;
