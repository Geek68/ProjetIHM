"use client"
import { useRef,useEffect } from "react"
import { Chart } from "chart.js/auto"
export default function GraphePret()
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
                type:"pie",
                data:{
                    labels: ['Pret_payé','Pret_Non_payé'],
                    datasets: [{
                    label: 'Pourcentage',
                    data: [300, 150],
                    backgroundColor: ['#00A762','#37463D'],
                       
                      }]
                },
                
            })
            ChartRef.current.chart = newchart
        }
},[])
    return(<div className="  w-2/3 h-[20rem] flex flex-row justify-center" >
        <canvas ref={ChartRef} className=" w-2/3 h-[20rem]"/>
    </div>)
}