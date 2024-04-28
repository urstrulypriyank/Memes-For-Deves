"use client"
import Link from "next/link";
import { LANG } from "@/app/utils/Language";
import { LanguageSelector } from "./LanguageSelector";
import { useContext } from "react";
import { LanguageContext } from "../Context/ContextProviders";
import { useLanguageData } from "@/app/utils/utils";
type Props = {};


const Navbar = (props: Props) => {

    return (
        <div className="flex w-full  md:justify-between justify-around bg-blue-400 p-4  ">
            <NavbarLeftSection />
            <NavbarRightSection />
        </div>
    );
};

export default Navbar;

const NavbarLeftSection = () => {
    return (
        <div className="md:flex md:w-1/5 w-0 md:visible hidden md:justify-center">
            <Link href={"/"} className="hove:text-white">Memes</Link>
        </div>
    );
};

const NavbarRightSection = () => {
    "use client"
    const data = useLanguageData();
        

    return (
        <div className="flex md:w-2/5  items-center md:justify-center  space-x-10 ">
            {data.header?.navlink?.map((item: any) => {
                return (
                    <Link
                        href={item.href}
                        key={item.id}
                        className="hover:text-yellow-100 hover:animate-pulse"
                    >
                        {item.name}
                    </Link>
                );
            })}
            <LanguageSelector />
        </div>
    );
};


