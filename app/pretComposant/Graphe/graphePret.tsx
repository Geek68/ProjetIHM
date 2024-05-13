"use client"
import { useRef,useEffect, useState } from "react"
import { Chart } from "chart.js/auto"
import { GetPret,GetTotalPretNonPaye,GetTotalPretPaye } from "@/lib/donnneePret";
export default function GraphePret()
{   
    const ChartRef = useRef(null)
    // console.log(Paye,NonPaye)
    useEffect(()=>{
            const FetcthData= async ()=>{
                    const Paye = await  GetTotalPretPaye()
                    const NonPaye = await  GetTotalPretNonPaye()

                if(ChartRef.current)
                    {
                      
                        if(ChartRef.current.chart)
                            {
                                ChartRef.current.chart.destroy()
                            }
                        const context = ChartRef.current.getContext("2d")
                        // console.log(Paye,NonPaye)
                        const newchart  = new Chart(context,{
                            type:"pie",
                            data:{
                                labels:["Prêt_payé","prêt_NonPayé"],
                                datasets:[
                                    {
                                        label:"Pourcentage des prêts",
                                        data:[Paye,NonPaye],
                                        backgroundColor:["#00A762","#37463D"]
                                    }
                                ]
                            },
                        })
                        ChartRef.current.chart = newchart
                    }
               
            }
        FetcthData()
    },[])

    return(<div className="  w-2/3 h-[20rem] flex flex-row justify-center" >
        <canvas ref={ChartRef} className=" w-2/3 h-[20rem]"/>
    </div>)
}