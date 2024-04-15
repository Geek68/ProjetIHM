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
                            backgroundColor:"#9FF383",
                            borderColor:"#9FF383",
                            borderWidth:1
                        }
                    ]
                },
                options:
                {
                    responsive: true,
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
    return(<div className="w-full h-2/6 flex flex-row justify-center" >
        <canvas ref={ChartRef}/>
    </div>)
}