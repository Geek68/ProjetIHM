"use client"
import { useRef,useEffect } from "react"
import { Chart } from "chart.js/auto"
import { GetNbrVersement } from "@/lib/donneeVersement";
export default function Graphe()
{
    const ChartRef = useRef(null)

    useEffect(()=>{
        const LanceGraphe = async ()=>{
                const data = await  GetNbrVersement() ///Recuperation de data

                //Calcul du total du Versemnt par mois 
                const Somme = data.reduce((accumulateur,donnee)=>{
                    const mois = new Date(donnee.dateVersement).getMonth() + 1
                    if (!accumulateur[mois]) 
                    {
                             accumulateur[mois] = { mois: mois, total: 0 };
                    }
                    accumulateur[mois].total += donnee._count.numeroVersement;
                    return accumulateur;
               },[])
                //Calcul du total du Versemnt par mois 

             //Création du donnée de la graphe 
            var donne =[0,0,0,0,0,0,0,0,0,0,0,0]
            Somme.map(elm =>{
                donne.splice(elm.mois-1,1,elm.total)
              })
            //Création du donnée de la graphe 

            //Création Du diagramme
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
                                    data:donne,
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
             //Création Du diagramme

             
        } 
        LanceGraphe()
    },[])
    return(<div className="  w-2/3 h-[20rem] flex flex-row justify-center" >
        <canvas ref={ChartRef} className=" w-2/3 h-[20rem]"/>
    </div>)
}