"use client"
import { useRef,useEffect } from "react"
import { Chart } from "chart.js/auto"
export default function Graphe()
{
    const ChartRef = useRef(null)

useEffect(()=>{
    if(ChartRef.current)
        {
            if(ChartRef.current.chart)
                {
                    ChartRef.current.chart.destroy()
                }
            const context = ChartRef.current.getContext("2d")
            const newchart  = new Chart(context,{
                type:"line",
                data:{
                    labels:["Jan", "Feb", "Mar", "Avr", "Mai", "Jun", "Jul","Aout","Sept", "Oct","Nov","Dec"],
                    datasets:[
                        {
                            label:"nombre des depôts par mois",
                            data:[12,19,3,5,2,3,6,2,3,4,5,30],
                            backgroundColor:"#00A762",
                            borderColor:"#00A762",
                            borderWidth:1
                        }
                    ]
                },
                options:
                {
                  
                    scales:{
                        x:{
                            type:"category"
                        },
                        y:
                        {
                            beginAtZero:true,
                        }
                    }
                }
            })
            ChartRef.current.chart = newchart
        }
},[])
    return(<div className="  w-2/3 h-[20rem] flex flex-row justify-center" >
        <canvas ref={ChartRef} className=" w-2/3 h-[20rem]"/>
    </div>)
}