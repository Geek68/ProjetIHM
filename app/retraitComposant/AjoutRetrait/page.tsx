"use client"
import { Input,Select, SelectItem } from "@nextui-org/react"
import React,{useEffect, useState}from "react"
import { NumComptes } from "@/app/Composants/dataDonnee";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './retrait.css'
import { RetraitArgent } from "@/lib/donneeRetrait";
import { DonneeClient } from "@/app/clientComponent/tableClient/dataClient";
export default function FaireRetrait()
{
    const NumComptes =DonneeClient()

    const [formData, setFormData] = useState({
       numeroCompte:"",
       montantRetrait:"",
       dateRetrait:null,
      });
      // Current step (0 or 1)

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      async function handleSubmit(event) {
        event.preventDefault();
       try{
            const reponse =  await RetraitArgent(formData)
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
                            location.reload();
                        }
                }
          
       
       }
       catch(error){
           console.log(error)
       }
    };
    return(<>
    <div className="AjoutClient flex justify-center items-center w-1/4 rounded-xl p-3 "   style={{ background:"#FFFFFF"}}>
       <div className="flex flex-col gap-6">
            <h1 className="text-center text-2xl text-green-400">Faire un rétrait</h1>
            <form className="flex flex-col gap-8 w-[250px]" onSubmit={handleSubmit}>
                <div className="part1 flex flex-col gap-3">
                    <Select
                    value={formData.numeroCompte} 
                    onChange={handleChange}
                    name="numeroCompte"
                    items={NumComptes}
                    label="Compte à retraire"
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
                    <Input size="md" value={formData.montantRetrait} onChange={handleChange} style={{ color: "black" }} className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à tirer*</label>} name="montantRetrait"/>
                    <Input size="md" value={formData.dateRetrait} onChange={handleChange}style={{ color: "black" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date*</label>} name="dateRetrait"/>
                </div>
                <div className='SignupBtn flex flex-wrap gap-2 mt-2'>
                    <button
                    type='button'
                    style={{background:"none",border:"2px solid black",color:"black"}}
                    className="px-4 py-2 flex-1 rounded-xl opacity-50 bg-slate-500">
                        Annuler
                     </button>
                     <button type= "submit"  style={{background:"#24D26D",color:"white"}} className='BtnSignup px-4 flex-1 py-2 rounded-xl'>Retraire</button>
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