import Image from "next/image";
const MemesCard = ({ url, title, author }: { url: string, title: string, author: string }) => {
    return (
        <div className=" border border-black  m-4 my-10 p-2 md:w-1/5">
            <Image src={url} alt={title} height={300} width={300} className="w-full max-h-60  min-h-52  "
                unoptimized


            />
            <div className="ml-1">
                <h3 className="">@{author}</h3>
                <p className="ml-1">{title}</p>
            </div>
        </div>
    );
};
export default MemesCard;