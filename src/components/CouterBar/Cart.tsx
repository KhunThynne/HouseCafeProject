


import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface CarouselSlideType {
    children?: ReactNode
}


export default function CarouselSlide({ children }: CarouselSlideType) {
    const [stat, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (
        <div>
            <div className="p-3  z-30">
                Cart
            </div>
            <div className="p-5 fixed right-0 border-4 border-black  w-[100%] md:w-[500px] h-[100%]">


                <div className="absolute m-screen text-gray-300 "><h1 className="">Cart layout.</h1>  </div>


            </div>
        </div>
    )
}