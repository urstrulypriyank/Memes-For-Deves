"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
    memes: any[];
};

const MemesList = (props: Props) => {
    console.log(props.memes);
    const [memes, setMemes] = useState(props.memes || []);

    return (<>

        {
            memes?.map((meme: any) => {
                return (
                    <MemesCard key={meme.ups} url={meme.url} title={meme.title} author={meme.author} />
                )
            })
        }
    </>)
};

export default MemesList;

const MemesCard = ({ url, title, author }: { url: string, title: string, author: string }) => {
    return (
        <div className="w-90 border border-black  m-4 my-10 p-2">
            <Image src={url} alt={title} height={300} width={300} className="w-full max-h-60  min-h-44]" />
            <div className="ml-1">
                <h3 className="">@{author}</h3>
                <p className="ml-1">{title}</p>
            </div>
        </div>
    );
};
