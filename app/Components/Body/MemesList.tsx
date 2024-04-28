"use client";
import React, { Suspense, useEffect, useState } from "react";
import MemesCard from "./MemeCard";
import ShimmerMemeCard from "./ShimmerMemeCard";
import { fetchData } from "@/app/utils/utils"

type Props = {
    memes: any[];
};

const MemesList = (props: Props) => {

    const [memes, setMemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // if memes is not present the 

    useEffect(() => {
        //@ts-ignore
        setMemes(props.memes)
        setIsLoading(false);
    }, [props.memes])


    useEffect(() => {

        const handleScroll = async () => {
            if (window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight) {
                setIsLoading(true);
                const newdata = await fetchData();
                console.log(newdata, "new data from useEffect")
                //@ts-ignore
                setMemes((memes) => [...memes, ...newdata])
                setIsLoading(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])




    return (<div className="md:flex md:flex-row flex-wrap justify-center">



        {
            memes?.map((meme: any) => {
                return (
                    <MemesCard key={meme.ups} url={meme.url} title={meme.title} author={meme.author} />
                )
            })

        }

        {

            isLoading &&
            Array(20).fill(0).map((_, index) => {
                return (<ShimmerMemeCard key={index} />)
            })
        }

    </div>)
};

export default MemesList;


