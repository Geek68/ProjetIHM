import FairePret from "@/app/pretComposant/FairePret/page"
import TablePret from "@/app/pretComposant/tablePret/page"
export default function Depot()
{
    return (<>
        <div className="h-full flex flex-col justify-evenly gap-3">
            <div className="flex flex-row justify-evenly">
               <FairePret/>
               <TablePret/>
            </div>
           
        </div>
    </>) 
}