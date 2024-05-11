"use client";

import { Button } from "@material-tailwind/react";
export default function HomeDetail() {
    localStorage.setItem("test","D")
    const theme = {
        component: {
        
          styles: {color:"white"} 
        }
      }
    return (
        <div>
            {/* eslint-disable-next-line */}
            <Button className="bg-[#aa1414]" onClick={()=>{}}>A simple alert for showing message.</Button>
        </div>
    );
}
