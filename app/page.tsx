import Image from "next/image";
import { LANG } from "@/app/utils/Language";
import PageHeading from "./Components/Header/PageHeading";
import Navbar from "./Components/Header/Navbar";
import ContextWrapper from "./Components/Context/ContextWrapper";
import MemesContinaer from "./Components/Body/MemesContinaer";
// ********************************************
export default function Home() {
  const data = LANG["en"];
  return (
    <div>
     
              <PageHeading title={data.title} />
        <MemesContinaer />
      
    </div>
  );
}
