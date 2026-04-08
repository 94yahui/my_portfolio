import type React from "react";
import { devProcessColors,bgDevProcessColors } from "../style/color"

interface DevProcessProps {
    title:string
    steps:string[]
    color: "blue" | "purple" | "green" | "orange";
    children:React.ReactNode
}

const DevProcessCard = ({title, steps, color,children}:DevProcessProps)=>{
    return(
    <div className="relative flex-1 transition-all duration-500 group rounded-2xl">
        <div className="relative z-10 w-full flex flex-col items-center gap-2 p-10 bg-gray-100/80 rounded-2xl">
        <div className="group-hover:scale-110 transition-all duration-500">
            {children}
        </div>
        <h2 className="text-xl font-semibold text-center mb-3 mt-2">{title}</h2>
        <div className="flex flex-col gap-5">

        {steps.map((step,index)=>
        <div className="flex gap-4 flex-row items-start">
            <div className={`min-w-6 h-6 rounded-2xl flex justify-center items-center ${devProcessColors[color]}`}>{index + 1}</div>
            <p className="-m-0.75 text-[15px]">{step}</p>
        </div>
        )}
        </div>
        </div>


        <div className={`absolute z-0 inset-0 ${bgDevProcessColors[color]} opacity-0 group-hover:opacity-100 blur-lg transition-all duration-1000 rounded-2xl`}></div>
    </div>)
}

export default DevProcessCard;