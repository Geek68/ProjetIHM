"use client"
import { Input,Select, SelectItem } from "@nextui-org/react"
import React,{useEffect, useState}from "react"
import { DonneeClient } from "@/app/clientComponent/tableClient/dataClient";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './virer.css'
import { VirerMoney } from "@/lib/donneeVirement";
export default function VirerArgent()
{
    const NumComptes =DonneeClient()
    const [formData, setFormData] = useState({
       NumCompteDestinataire:"",
       NumCompteExpeditaire:"",
       montantVirement:"",
       dateVirement:null,
      });
      // Current step (0 or 1)

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      async function handleSubmit(event) {
        event.preventDefault();
       try{
            const reponse =  await VirerMoney(formData)
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
                                NumCompteDestinataire:"",
                                NumCompteExpeditaire:"",
                                montantVirement:"",
                                dateVirement:null,
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
            <h1 className="text-center text-2xl text-green-400">Virer de l'Argent</h1>
            <form className="flex flex-col gap-8 w-[250px]" onSubmit={handleSubmit}>
                <div className="part1 flex flex-col gap-4">
                    <Select
                    items={NumComptes}
                    value={formData.NumCompteExpeditaire}
                    onChange={handleChange}
                    name="NumCompteExpeditaire"
                    label="Compte Expeditaire"
                    placeholder="Choisir le compte"
                    labelPlacement="outside"
                    >
                    
                        {
                            (numero)=>(
                                <SelectItem key={numero.numeroCompte} style={{color:'gray'}} textValue={numero.numeroCompte}>
                                {numero.nomClient} {numero.prenomsClient}
                            </SelectItem>
                            )
                        }
                    </Select>
                    <Select
                    items={NumComptes}
                    value={formData.NumCompteDestinataire} 
                    name="NumCompteDestinataire"
                    onChange={handleChange}
                    label="Compte Destinataire"
                    placeholder="Choisir le compte"
                    labelPlacement="outside"
                    >
                    
                        {
                            (numero)=>(
                                <SelectItem key={numero.numeroCompte} style={{color:'gray'}} textValue={numero.numeroCompte}>
                                    {numero.nomClient} {numero.prenomsClient}
                                </SelectItem>
                            )
                        }
                    </Select>
                    <Input size="md" value={formData.montantVirement} onChange={handleChange} style={{ color: "black" }} className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à Verser*</label>} name="montantVirement"/>
                    <Input size="md" value={formData.dateVirement} onChange={handleChange} style={{ color: "black" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date*</label>} name="dateVirement"/>
                </div>
                <div className='SignupBtn flex flex-wrap gap-2 mt-2'>
                    <button
                    type='button'
                    style={{background:"none",border:"2px solid black",color:"black"}}
                    className="px-4 py-2 flex-1 rounded-xl opacity-50 bg-slate-500">
                        Annuler
                     </button>
                     <button type= "submit"  style={{background:"#24D26D",color:"white"}} className='BtnSignup px-4 flex-1 py-2 rounded-xl'>Virer</button>
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