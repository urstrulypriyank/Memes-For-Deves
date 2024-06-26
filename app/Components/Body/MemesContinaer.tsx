
import { URL_API } from "@/app/utils/Constant"
import MemesList from './MemesList';
type Props = {}

const MemesContinaer = async (props: Props) => {
    const res = await fetch(URL_API, {
        cache: "no-store"
    });
    const data = await res.json();


    return (
        <MemesList memes={data.memes} />
    )
}

export default MemesContinaer