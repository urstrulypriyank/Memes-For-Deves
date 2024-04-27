import { createContext } from "react";
type THEME_TYPE = {
    theme?: string,
    setTheme?: any
}
type LANGUAGE_TYPE = {
    language?: string,
    setLanguage?: any
}

export const ThemeContext = createContext<THEME_TYPE>({

    theme: 'System',
    setTheme: undefined,
});
export const LanguageContext = createContext<LANGUAGE_TYPE>({
    language: "en",
    setLanguage: undefined,
});

