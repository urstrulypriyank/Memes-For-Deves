"use client"
import { useState } from "react";


export const LanguageSelector = () => {

    const [language, setLanguage] = useState<String>('en');
    return (
        <select onChange={(e) => {
            e.preventDefault();
            setLanguage(e.target.value);
            console.log(e.target.value);
        }}>
            <option value="en" defaultValue={'en'}>English</option>
            <option value="hi" >Hindi</option>
        </select>
    );
};