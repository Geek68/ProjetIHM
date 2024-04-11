"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome,faSackDollar,faHandHoldingDollar,faMoneyBillTransfer,faMoneyCheckDollar,faUser } from '@fortawesome/free-solid-svg-icons';
import './links.css'
import { useState } from "react";

export default function Links()
{
    const [active,seTActive] = useState('')
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
            <Link href="/home">
                <div className={Isclicked("a")} onClick={()=>{HandeActive("a")}}>
                    <FontAwesomeIcon icon={faHome}  color="white"  className="ICONS" width={20} height={20}/>
                    <h1 className="text-xl">Home</h1>
                </div>
            </Link>
            <Link href="/home/client">
            <div className={Isclicked("b")} onClick={()=>{HandeActive("b")}}>
                    <FontAwesomeIcon icon={faUser}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Client</h1>
                </div>
            </Link>
            <Link href="/home/depot">
              <div className={Isclicked("c")} onClick={()=>{HandeActive("c")}}>
                    <FontAwesomeIcon icon={faSackDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Versement</h1>
                </div>
            </Link>
            <Link href="/home/retrait">
            <div className={Isclicked("e")} onClick={()=>{HandeActive("e")}}>
                    <FontAwesomeIcon icon={faMoneyCheckDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Retrait</h1>
                </div>
            </Link>
            <Link href="/home/virement">
            <div className={Isclicked("f")} onClick={()=>{HandeActive("f")}}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Virement</h1>
                </div>
            </Link>
            <Link href="/home/pret">
            <div className={Isclicked("d")} onClick={()=>{HandeActive("d")}}>
                    <FontAwesomeIcon icon={faHandHoldingDollar}  className="ICONS" color="white" width={20} height={20}/>
                    <h1 className="text-xl">Prêt</h1>
                </div>
            </Link>
        </div>
    </>)
}