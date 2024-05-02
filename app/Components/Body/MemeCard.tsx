import Image from "next/image";
const MemesCard = ({ url, title, author }: { url: string, title: string, author: string }) => {
    return (
        <div className=" border border-black bg-white/80  m-4 my-6 p-2 md:w-1/5 md:h-full rounded-md  md:max-w-80 md:max-h-80 md:min-w-80 md:min-h-80 shadow-md backdrop-blur-2xl">
            <Image src={url} alt={title} height={300} width={300} className="w-full max-h-60  min-h-60  rounded p-2 pt-4 "
                unoptimized

            />


            <div className="ml-1 mt-2 border-t border-black  ... mx-1 pt-0.5">
                <h3 className="">@{author}</h3>
                <p className="ml-1 truncate text-ellipsis " >{title}</p>
            </div>
        </div>
    );
};
export default MemesCard;