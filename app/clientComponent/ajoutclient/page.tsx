"use client"
import { Input } from "@nextui-org/react"
import React,{useEffect, useState}from "react"
import './ajoutClient.css'
import { AjouterClient } from "@/lib/donneClient"
import { number } from "zod"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AjoutClient()
{
    const [next, setnext] = useState(0);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        adresse: "",
        tel: "",
        email: "",
        montant: "",
      });
      // Current step (0 or 1)

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      async function handleSubmit(event) {
        event.preventDefault();
       try{
            const reponse =  await AjouterClient(formData)
            if(reponse!=undefined)
                {
                    if(!reponse.reussie)
                        {
                        reponse.mess.map(err=>{
                            toast.error(err)
                        });
                        }
                        else
                        {
                            toast.success(reponse.mess)
                            setFormData({
                                nom: "",
                                prenom: "",
                                adresse: "",
                                tel: "",
                                email: "",
                                montant: "",
                              });
                        }
                }
          
       
       }
       catch(error){
           console.log(error)
       }
    };
    return(<>
    <div className="AjoutClient flex justify-center items-center w-1/4 rounded-xl p-3 "  style={{ background:"#FFFFFF"}}>
       <div className="flex flex-col gap-6">
            <h1 className="text-center text-2xl" style={{color:"#24D26D"}}>Ajout un client</h1>
            <form className="flex flex-col gap-8 w-[250px]" onSubmit={handleSubmit}>
                <div className={`${next === 0 ?"block":"hidden"} part1 flex flex-col gap-3`}>
                    <Input size="md" value={formData.nom} onChange={handleChange} style={{ color: "black" }} className="text-xl" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Nom*</label>} name="nom"/>
                    <Input size="md" value={formData.prenom} onChange={handleChange} style={{ color: "black" }}  className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Prenoms*</label>} name="prenom"/>
                    <Input size="md" value={formData.adresse} onChange={handleChange} style={{ color: "black" }}  className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Addresse*</label>} name="adresse"/>
                </div>
                <div className={`${next === 1 ?"block":"hidden"} part2  flex flex-col gap-3`}>
                    <Input size="md" value={formData.tel} onChange={handleChange} style={{ color: "black" }}  className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Tel*</label>} name="tel"/>
                    <Input size="md" value={formData.email} onChange={handleChange} style={{ color: "black" }}  className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Email*</label>} name="email"/>
                     <Input size="md" value={formData.montant} onChange={handleChange} style={{ color: "black" }}  className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Depôt Initial*</label>} name="montant"/>
                </div>
                <div className='SignupBtn flex flex-wrap gap-2 mt-2'>
                    <button
                    type='button'
                    onClick={()=>{setnext(0)}}
                    style={{background:"none",border:"2px solid black",color:"black"}}
                    className={`px-4 py-2 flex-1 rounded-xl opacity-50 bg-slate-500 ${next === 0 ? "hidden" : "block"}`}>
                        Retour
                     </button>
                    <button
                    type="button"
                    style={{background:"#24D26D",color:"white"}} 
                    onClick={() =>{setnext(1)}}
                    className={`px-4 py-2 flex-1 rounded-xl bg-blue-600 text-white ${next === 1 ? "hidden": "opacity-100"}`}>Suivant</button>
                    {
                    next=== 1 ? 
                    (<button type= "submit"  style={{background:"#24D26D",color:"white"}}  className='BtnSignup px-4 flex-1 py-2 rounded-xl'>S'inscrire</button>) : null
                     }
                    </div>
            </form>
       </div>
       <ToastContainer
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
/>
    </div>
    </>)
}