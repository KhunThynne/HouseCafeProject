


import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface ProductBoxType {
    children?: ReactNode
}


export default function ProductBox({ children }: ProductBoxType) {
    const [state, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (
        <div className="border p-5  bg-white h-[350px] w-full content-center">
            <div className="relative">

            </div>
        </div>
    )
}