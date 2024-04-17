import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "@nextui-org/react";
import {faMailBulk,faPrint} from '@fortawesome/free-solid-svg-icons';
import { historique } from "./dataHistorique";
import './historique.css'
export default function Historique()
{
    return(
        <div className="h-full w-1/4 px-5 py-3 rounded-3xl flex flex-col gap-10" style={{ background:"#FFFFFF"}}>
            <div className="flex flex-row justify-between">
                <h1 style={{color:"#24D26D",fontSize:"20px"}}>Historique client</h1>
                <div className="flex flex-row gap-4">
                <Tooltip color="primary" content="Evoyer par Email l'historique">
                        <FontAwesomeIcon className="p-2 rounded-full" icon={faMailBulk}  style={{background:"#24D26D"}} color="white" width={50} height={50}/>
                </Tooltip>
                <Tooltip color="primary" content="Imprimer l'historique">
                        <FontAwesomeIcon className="p-2 rounded-full" icon={faPrint}  style={{background:"#24D26D"}} color="white" width={50} height={50}/>
                </Tooltip>
                </div>
            </div>
            <div className="rounded-2xl p-3 histo flex flex-col gap-5" >
                {
                    historique.map((donnee)=>
                        <div key={donnee.date}>
                            <h1 style={{color:"#24D26D"}}>{donnee.date}</h1>
                            <p style={{color:"black"}}>
                                <span>{donnee.transaction} : </span>
                               <span>{donnee.Montant}</span>
                            </p>
                        </div>

                    )
                }
            </div>
        </div>
    )
}