"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSackDollar,faHandHoldingDollar,faMoneyBillTransfer,faMoneyCheckDollar,faCalendar,faClock} from '@fortawesome/free-solid-svg-icons';
import './otehrInfo.css'
import { date } from "@/app/Composants/Times";
import GetHours from "@/app/Composants/Times";
export default function OtherInfo()
{
   
    
    var hours= GetHours()
    return(<>
        <div className="flex flex-col justify-between h-full w-2/3">
           <div className="flex flex-row  w-5/5 justify-between">
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#24D26D" }}>1000000 ar</h1>
                                <h3 className="text-xl" style={{color:"black"}}>Compte</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faSackDollar}  color="white" width={50} height={50}/>
                        </div>
                        <p style={{color:"gray"}}>l'argent en compte du clien</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#24D26D" }}>1000000 ar</h1>
                                <h3 className="text-xl" style={{color:"black"}}>Rétrait</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faMoneyCheckDollar}  color="white" width={50} height={50}/>
                        </div>
                        <p style={{color:"gray"}}>Total du Retrait fait</p>
                    </div>
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                    <div className="titelIcon flex flex-row gap-10 items-center">
                        <div className="titleH1 flex flex-col gap-2">
                            <h1 className="text-2xl" style={{ color:"#24D26D" }}>Aujourd'hui</h1>
                            <h3 className="text-xl" style={{color:"black"}}>le {date}</h3>
                        </div>
                        <FontAwesomeIcon className="p-2 rounded-full icon" icon={faCalendar}  color="white" width={50} height={50}/>
                    </div>
                    <p style={{color:"gray"}}>La date actuelle</p>
                </div>
           </div>
           <div className="flex flex-row justify-between">
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#24D26D" }}>1000000 ar</h1>
                                <h3 className="text-xl" style={{color:"black"}}>Virement</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faMoneyBillTransfer}  color="white" width={50} height={50}/>
                        </div>
                        <p style={{color:"gray"}}>Sommes d'argent virer</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#24D26D" }}>1000000 ar</h1>
                                <h3 className="text-xl"  style={{color:"black"}}>Prêt</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faHandHoldingDollar} color="white" width={50} height={50}/>
                        </div>
                        <p style={{color:"gray"}}>Argent emprunter</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#24D26D" }}>Heure Actuel</h1>
                                <h3 className="text-xl"  style={{color:"black"}}>{hours}</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faClock}  color="white" width={50} height={50}/>
                        </div>
                        <p style={{color:"gray"}}>Avoir l'heure à tout moment</p>
                    </div>
                </div>
        </div> 
    </>)
}