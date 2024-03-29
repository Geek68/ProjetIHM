import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSackDollar,faHandHoldingDollar,faMoneyBillTransfer,faMoneyCheckDollar,faCalendar,faClock} from '@fortawesome/free-solid-svg-icons';
import './otehrInfo.css'
export default function OtherInfo()
{
    return(<>
        <div className="flex flex-col gap-5 w-2/3">
           <div className="flex flex-row  w-5/5 justify-between">
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#A7F790" }}>1000000 ar</h1>
                                <h3 className="text-xl">Compte</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faSackDollar}  color="#A7F790" width={50} height={50}/>
                        </div>
                        <p className="text-gray-500">l'argent en compte du clien</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#A7F790" }}>1000000 ar</h1>
                                <h3 className="text-xl">Rétrait</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faMoneyCheckDollar}  color="#A7F790" width={50} height={50}/>
                        </div>
                        <p className="text-gray-500">Total du Retrait fait</p>
                    </div>
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                    <div className="titelIcon flex flex-row gap-10 items-center">
                        <div className="titleH1 flex flex-col gap-2">
                            <h1 className="text-2xl" style={{ color:"#A7F790" }}>Aujourd'hui</h1>
                            <h3 className="text-xl">C'est le</h3>
                        </div>
                        <FontAwesomeIcon className="p-2 rounded-full icon" icon={faCalendar}  color="#A7F790" width={50} height={50}/>
                    </div>
                    <p className="text-gray-500">Mardi 23 Mars 2024</p>
                </div>
           </div>
           <div className="flex flex-row justify-between">
                <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#A7F790" }}>1000000 ar</h1>
                                <h3 className="text-xl">Virement</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faMoneyBillTransfer}  color="#A7F790" width={50} height={50}/>
                        </div>
                        <p className="text-gray-500">Sommes d'argent virer</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#A7F790" }}>1000000 ar</h1>
                                <h3 className="text-xl">Prêt</h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faHandHoldingDollar}  color="#A7F790" width={50} height={50}/>
                        </div>
                        <p className="text-gray-500">Argent emprunter</p>
                    </div>
                    <div className="div1 flex flex-col gap-6 rounded-2xl w-5/5 p-3">
                        <div className="titelIcon flex flex-row gap-10 items-center">
                            <div className="titleH1 flex flex-col gap-2">
                                <h1 className="text-2xl" style={{ color:"#A7F790" }}>Heure Actuel</h1>
                                <h3 className="text-xl">il est </h3>
                            </div>
                            <FontAwesomeIcon className="p-2 rounded-full icon" icon={faClock}  color="#A7F790" width={50} height={50}/>
                        </div>
                        <p className="text-gray-500">Avoir l'heure à tout moment</p>
                    </div>
                </div>
        </div> 
    </>)
}