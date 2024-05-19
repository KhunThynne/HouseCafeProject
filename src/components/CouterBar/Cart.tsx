


import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface CarouselSlideType {
    children?: ReactNode
}


export default function CarouselSlide({ children }: CarouselSlideType) {
    const [state, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (
        <div>
            <div className="cursor-pointer p-2 px-5  z-30 border rounded hover:text-gray-400" onClick={() => { setState((prevenState: any) => !prevenState) }}>
                Cart
            </div>
            <div className={`${state ? "fixed" : "hidden"}  p-5  right-0 border-4 border-black bg-white w-[100%] md:w-[500px] h-[100%]`}>


                <div className="absolute m-screen text-gray-300 "><h1 className="">Cart layout.</h1>  </div>


            </div>
        </div >
    )
}