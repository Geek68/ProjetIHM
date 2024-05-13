"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome,faSackDollar,faHandHoldingDollar,faMoneyBillTransfer,faMoneyCheckDollar,faUser } from '@fortawesome/free-solid-svg-icons';
import './links.css'
import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Links()
{
    const [active,seTActive] = useState('')
    const routeur= useRouter()
    const HandeActive = (param:string)=>
    {
        seTActive(param)
    }
    const Isclicked=(param:string)=>
    {
        if(param===active)
        {
            return"flex flex-row gap-4  py-3 px-6 items-center links1"
        }
        else
        {

            return"flex flex-row gap-4  py-3 px-6 items-center links"
        }
    }
    return(<>
        <div className="flex flex-col gap-5  w-full " >
                <div className={Isclicked("a")} onClick={()=>{HandeActive("a"),routeur.push("/home")}}>
                    <FontAwesomeIcon icon={faHome}  color="white"  className="ICONS" width={20} height={20}/>
                    <h1 className="text-xl">Home</h1>
                </div>
            
        
            <div className={Isclicked("b")} onClick={()=>{HandeActive("b"),routeur.push("/home/client")}}>
                    <FontAwesomeIcon icon={faUser}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Client</h1>
                </div>

            
              <div className={Isclicked("c")} onClick={()=>{HandeActive("c"),routeur.push("/home/depot")}}>
                    <FontAwesomeIcon icon={faSackDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Versement</h1>
                </div>
            
        
            <div className={Isclicked("e")} onClick={()=>{HandeActive("e"),routeur.push("/home/retrait")}}>
                    <FontAwesomeIcon icon={faMoneyCheckDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Retrait</h1>
                </div>
        
            <div className={Isclicked("f")} onClick={()=>{HandeActive("f"),routeur.push("/home/virement")}}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Virement</h1>
            </div>
    
            <div className={Isclicked("d")} onClick={()=>{HandeActive("d"),routeur.push("/home/pret")}}>
                    <FontAwesomeIcon icon={faHandHoldingDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Prêt</h1>
                </div>
        </div>
    </>)
}