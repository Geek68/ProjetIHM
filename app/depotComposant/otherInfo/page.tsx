"use client"
import { date } from "@/app/Composants/Times";
import GetHours from "@/app/Composants/Times";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar,faClock} from '@fortawesome/free-solid-svg-icons';
export default function TimeHous ()
{
    var hours= GetHours()
    return(<div className=" w-1/4 flex flex-col gap-4"> 
    <div className="flex flex-col gap-6 rounded-2xl w-5/5 p-3" style={{background:"white"}}>
            <div className="titelIcon flex flex-row justify-around items-center">
                <div className="titleH1 flex flex-col gap-2">
                    <h1 className="text-2xl" style={{ color:"#24D26D" }}>Aujourd'hui</h1>
                    <h3 className="text-xl" style={{color:"black"}}>le {date}</h3>
                </div>
                <FontAwesomeIcon className="p-2 rounded-full" icon={faCalendar} style={{background:"#24D26D"}} color="white" width={50} height={50}/>
            </div>
            <p style={{color:"gray"}} className="px-10">La date actuelle</p>
        </div>
        <div className=" flex flex-col gap-6 rounded-2xl w-5/5 p-3" style={{background:"white"}}>
                <div className="titelIcon flex flex-row justify-around items-center">
                    <div className="titleH1 flex flex-col gap-2">
                        <h1 className="text-2xl" style={{ color:"#24D26D" }}>Heure Actuel</h1>
                        <h3 className="text-xl"  style={{color:"black"}}>{hours}</h3>
                    </div>
                    <FontAwesomeIcon className="p-2 rounded-full icon" icon={faClock} style={{background:"#24D26D"}} color="white" width={50} height={50}/>
                </div>
                <p style={{color:"gray"}} className="px-10">Avoir l'heure à tout moment</p>
         </div>

</div>)
}