"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "@nextui-org/react";
import {faMailBulk,faPrint} from '@fortawesome/free-solid-svg-icons';
import { DonneHistorique } from "./dataHistorique";
import './historique.css'
export default function Historique()
{
    const historique = DonneHistorique()
    return(
        <div className="h-full w-1/4 px-5 py-3 rounded-3xl flex flex-col gap-10" style={{ background:"#FFFFFF"}}>
            <div className="flex flex-row justify-between">
                <h1 style={{color:"#24D26D",fontSize:"20px"}}>Historique client</h1>
            </div>
            <div className="rounded-2xl p-3 histo flex flex-col gap-5" >
                {
                    historique.map((donnee)=>
                        <div key={donnee.idHistorique}>
                            <h1 style={{color:"#24D26D"}}>{donnee.type}</h1>
                            <p style={{color:"black"}}>
                                <span>{donnee.donnee} </span>
                            </p>
                        </div>

                    )
                }
            </div>
        </div>
    )
}