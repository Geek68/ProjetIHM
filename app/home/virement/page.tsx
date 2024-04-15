import VirerArgent from "@/app/VirementComponent/AjoutVirement/page"
import TableVirement from "@/app/VirementComponent/TableVirement/page"
export default function Virement()
{
    return ( <div className="h-full">
     <div className="flex flex-row justify-evenly">
       <VirerArgent/>
       <TableVirement/>
     </div>
</div>)
}