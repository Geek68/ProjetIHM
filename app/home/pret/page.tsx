import FairePret from "@/app/pretComposant/FairePret/page"
import TablePret from "@/app/pretComposant/tablePret/page"
import TimeHous from "@/app/retraitComposant/otherInfo/page"
import Image from "next/image" 
import cards from "@/Images/Cards.png"
import GraphePret from "@/app/pretComposant/Graphe/graphePret"
export default function Depot()
{
    return (<>
        <div className="h-full flex flex-col justify-evenly gap-3">
            <div className="flex flex-row justify-evenly">
               <FairePret/>
               <TablePret/>
            </div>
            <div className="flex flex-row justify-evenly">
                <TimeHous/>
                <GraphePret/>
            </div>
        </div>
    </>) 
}