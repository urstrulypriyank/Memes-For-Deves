"use client"
import Link from "next/link";
import { LANG } from "@/app/utils/Language";
import { useContext } from "react";
import { LanguageContext } from "@/app/Components/Context/ContextProviders"

type Props = {};

const Navbar = (props: Props) => {
    const { language, setLanguage } = useContext(LanguageContext);
    console.log(language);
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
    return (
        <div className="flex md:w-2/5  items-center md:justify-center  space-x-10 ">
            {LANG.en.header.navlink.map((item: any) => {
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
        </div>
    );
};


