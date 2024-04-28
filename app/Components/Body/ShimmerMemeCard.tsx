import React from 'react'
type Props = {}

const ShimmerMemeCard = (props: Props) => {
    return (
        <div className=" border border-black  m-4 my-10 p-10 md:w-1/5 h-fit ">
            <div className="w-full max-h-60  min-h-52 bg-gray-200 animate-pulse" />
            <div className="ml-1  w-full [&>*]:my-2 pt-2">
                <h3 className="h-2 bg-gray-300 w-2/5 animate-pulse" ></h3>
                <p className="ml-1 h-2 bg-gray-300 animate-pulse"></p>
                <p className="ml-1 h-2 bg-gray-300 animate-pulse"></p>
            </div>
        </div>
    )
}

export default ShimmerMemeCard