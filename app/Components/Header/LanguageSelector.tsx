"use client"
import { useContext, useState } from "react";
import { LanguageContext } from "../Context/ContextProviders";

export const LanguageSelector = () => {

    const {language,setLanguage} = useContext(LanguageContext);
    return (
        <select onChange={(e) => {
            e.preventDefault();
            setLanguage(e.target.value);
            console.log(e.target.value);
        }}
            className="p-1.5 bg-blue-400 border-none"
        >
            <option value="en" defaultValue={'en'}>English</option>
            <option value="hi" >Hindi</option>
        </select>
    );
};