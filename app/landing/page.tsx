import Image from "next/image"
import img1 from '@/Images/image1.png'
import img2 from '@/Images/image2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBank,faMoneyBillWave,faSackDollar} from '@fortawesome/free-solid-svg-icons';
import './page.css'
import { poppins,pia } from "../fonts";
import { Link } from "@nextui-org/react";
export default function Landing()
{
    return(
        <div className="bodyHeader">
             {/* <FontAwesomeIcon icon={faMoneyBillWave} className="image1" color="#24D26D" width={150} height={150}/> */}
            <div className={`${poppins.className} ParentHeader w-5/5`}>
                <div className="flex flex-col items-center gap-12">
                    <header className="w-4/5 header flex flex-row justify-between gap-10 px-7 py-3 rounded-full">
                        <div className="flex flex-row gap-2 items-center">
                            <FontAwesomeIcon icon={faBank}  color="#24D26D" width={65} height={65}/>
                            <h1 style={{color:"black",fontSize:"20px"}}>MyBank</h1>
                        </div>
                        <Link href="/singnUp"><button className={`${pia.className} Connect rounded-full py-3 px-6 text-xl`}>Connectez-vous !</button></Link>
                    </header>
                    <div className="text-center">
                        <h1 className="text-5xl" style={{color:"#24D26D"}}>Gérez les finances en toute simplicité</h1>
                        <p className="parag text-gray-500">
                        Avec notre application, vous avez les transactions nécéssaires qui les clients ont besoin
                         </p>
                    </div>
                    <div className="colonne flex flex-row gap-5 items-center justify-around">
                        <div className="colonne1 h-4/5 flex flex-col gap-6 rounded-3xl py-10 px-6">
                            <h2>Retrait</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'une Client <span className="HeaderObj">pour retirer<br/> son argent </span>
                                à partir de ce montant
                            </p>
                        </div>
                        <div className="colonne2 flex flex-col gap-10 rounded-3xl py-10 px-6 border border-solid border-gray-400">
                            <h2>Virement</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'un Client <span className="HeaderObj">pour virer<br/> son argent</span><br/>
                            de son compte à un autre compte d'un<br/> autre client
                            </p>
                           <div className="flex flex-col items-center">
                                 <p className="Condition  items-center rounded-full text-center w-3/5 p-3">Sous-Condition</p>
                                 <p></p>
                           </div>
                        </div>
                        <div className="colonne3  h-4/5 flex flex-col gap-6 rounded-3xl py-10 px-6">
                            <h2>Depôt</h2>
                            <h1><span className="text-3xl text-gray-800">Ar 100 000</span> <span className="mois text-xl">/mois</span></h1>
                            <p className="text-black">Transaction d'un client <span className="HeaderObj">stocker<br/> son argent</span>
                            </p>
                            <p></p>
                        </div>

                    </div>
                    <div className="w-4/5 footer flex flex-row items-center justify-between gap-10 px-7 py-3 rounded-full">
                        <p className="text-xl">Pour les nouveaux créer-un pour faire les Transactions</p>
                        <Link href="/singnIn"><button className={`${pia.className} rounded-full py-3 px-6 text-xl`} style={{background:"white",color:"black"}}>S'inscrire !</button></Link>
                    </div>
                </div>
            </div>
            {/* <FontAwesomeIcon icon={faSackDollar} className="image2" color="#24D26D" width={150} height={150}/> */}
        </div>
        )
}