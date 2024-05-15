"use client";

import HomeDetail from "@/components/Home/HomeDetail";
import Navbar from "@/components/Root/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import Container from "@/components/Container";

import { Suspense } from "react";
import GridLayout from "@/components/GridLayout";

export default function Template({ children }: { children: React.ReactNode }) {
    const customTheme = "light"
    return <ThemeProvider value={customTheme}>
        <Suspense fallback={<>Load..</>}>
            {/* 
            <div className="grid grid-rows-3 gap-4  border h-[100vh]">
                <div className="row-start-1 row-end-1 border" ><Navbar /></div>
                <div className="col-span-2"> {children} </div>
                <div className="row-start-2 row-end-4 bg-white"> <div > </div> </div>
            </div>
 */}
            <GridLayout>
                <Navbar />
                <Container className="  border">{children}</Container>


            </GridLayout>








        </Suspense>
    </ThemeProvider>
}