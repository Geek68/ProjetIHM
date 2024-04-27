import ImageAuthen from "@/Images/Authentification.png"
import Image from "next/image"
import Link from "next/link"
import"./redirection.css"
export default function Redirection()
{
    return(<div className="h-[100vh] " style={{background:"white",display:"grid",placeContent:"center"}}>
        <div className="flex flex-row justify-evenly items-center gap-10  p-5">
                <div className="flex flex-col  justify-center  gap-10  h-full">
                    <div className="flex flex-col gap-3 ">
                        <p className="titre2 text-5xl">Oooooops !</p>
                        <p className="text-black text-3xl">Vous-devez s'authentifiez<br></br>pour accedez à l'appli </p>
                    </div>
                    <div className="flex flex-row  gap-10 ">
                        <Link href="/singnIn" style={{color:"#24D26D"}}>
                            <button className="text-2xl px-10 py-2 rounded-xl" style={{background:"#24D26D",color:"white"}} >S'Inscrire</button>
                        </Link>
                        <Link href="/singnUp" style={{color:"#24D26D"}}>
                            <button className="text-2xl px-10 py-2 rounded-xl" style={{color:"#24D26D",border:"2px solid #24D26D"}} >Se Connecter</button>
                        </Link>
                    </div>
                </div>
               <div className="flex flex-col items-center">
                    <Image src={ImageAuthen} alt="authentifiez"  width={500} height={500} />
                  
               </div>
        </div>
    </div>)
}