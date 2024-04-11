import Verser from "@/app/depotComposant/ajoutDepot/page"
import TableDepot from "@/app/depotComposant/tableDepot/page"
import Graphe from "@/app/depotComposant/Graphe/page"
export default function Depot()
{
    return (<>
        <div className="h-full flex flex-col justify-evenly gap-3">
            <div className="flex flex-row justify-evenly">
                <Verser/>
                <TableDepot/>
            </div>
            <Graphe/>
        </div>
    </>) 
}