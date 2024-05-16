import Link from "next/link"
import { ReactNode } from "react"

interface HomeLayoutType {
    children: ReactNode
    Abverties: ReactNode
    Products: ReactNode
    Menu: ReactNode
}




export default function HomeLayout({ children, Abverties, Products, Menu }: HomeLayoutType) {

    return (

        <div className="grid grid-rows-[30%,1fr]  md:grid-cols-[18%,1fr] gap-3 container mx-auto border h-full "  >

            {/* <Link href={`/dashboard`} >D</Link>
        <a href="/dashboard">D</a> */}
            {Menu}
            {Abverties}
            {Products}



            {/* {children} */}

        </div>)
}