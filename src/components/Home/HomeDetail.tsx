"use client";

import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
export default function HomeDetail() {


  useEffect(() => {
    localStorage.setItem("test", "D")
  }, [])

  const theme = {
    component: {

      styles: { color: "white" }
    }
  }
  return (

    <div className="flex justify-center ">
      Layout storage
    </div>

  );
}
