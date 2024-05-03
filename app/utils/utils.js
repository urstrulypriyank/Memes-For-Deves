import { useContext } from "react";
import { URL_API } from "./Constant"
import { LanguageContext } from "../Components/Context/ContextProviders";
import { LANG } from "@/app/utils/Language"

// function to fetch data from api
export async function fetchData() {
    try {
        const res = await fetch(URL_API, {
            // cache: 'no-store'
        })
        let data = await res.json();
        data = data.memes;
        return data;
    } catch (error) {
        console.log('Error: Unbale to fetch data from server ', error)
    }
}


//function to get lanugage based from context 

export function useLanguageData() {
    "use client"
    const { language, setLanguage } = useContext(LanguageContext);
    const data = LANG[language];
    return data;
}