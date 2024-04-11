import FaireRetrait from "@/app/retraitComposant/AjoutRetrait/page"
import TableRetrait from "@/app/retraitComposant/TableRetrait/page"
export default function Retrait()
{
    return ( <div className="h-full">
     <div className="flex flex-row justify-evenly">
        <FaireRetrait/>
        <TableRetrait/>
     </div>
</div>)
}