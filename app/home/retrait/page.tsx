import FaireRetrait from "@/app/retraitComposant/AjoutRetrait/page"
import TableRetrait from "@/app/retraitComposant/TableRetrait/page"
import Image from "next/image" 
import cards from "@/Images/Cards.png"
import './retrait.css'
import TimeHous from "@/app/retraitComposant/otherInfo/page"
export default function Retrait()
{
    return ( <div className="h-full flex flex-col justify-evenly">
     <div className="flex flex-row justify-evenly border">
        <FaireRetrait/>
         <TableRetrait/>
     </div>
     <div className="flex flex-row justify-evenly">
         <TimeHous/>
       <div className="w-2/3 h-full flex flex-row justify-between ">
            <div className="fondImage w-2/5 h-5/5 rounded-3xl">
                <div className="fondColor w-full  h-full rounded-3xl flex justify-center items-center">
                   <p className="text-center text-black text-2xl"> 
                    <span>Faire le retrait en tout sécurité,</span>
                    <br/><br/>
                    <span>de bon et du forme</span>
                   </p>
                </div>
            </div>
            <Image src={cards} width={500} height={800} alt="card" />
       </div>
     </div>
        
</div>)
}