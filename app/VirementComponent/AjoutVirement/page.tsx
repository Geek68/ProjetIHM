"use client"
import { Input,Select, SelectItem } from "@nextui-org/react"
import React,{useEffect, useState}from "react"
import { NumComptes } from "@/app/Composants/dataDonnee";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './virer.css'
import { VirerMoney } from "@/lib/donneeVirement";
export default function VirerArgent()
{

    const [formData, setFormData] = useState({
       NumCompteDestinataire:"",
       NumCompteExpeditaire:"",
       montantVirement:"",
       dateVersement:null,
      });
      // Current step (0 or 1)

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      let reponse;
      async function Error ()
      {
        reponse =  await VirerMoney(formData)
        
      }
    const handleSubmit = (event) => {
        event.preventDefault();
       try{
            Error().then(()=>{
                {
                  if(reponse.reussie ===false)
                  {
                    reponse.mess.map(err=>{
                        toast.error(err)
                    });
                    
                  }
                  else
                  {
                      toast.success(reponse.mess)
                  }
                }
               
            })
       }
       catch(error){
           console.log(error)
       }
    };
    return(<>
    <div className="AjoutClient flex justify-center items-center w-1/4 rounded-xl p-3 "  style={{ background:"#282828"}}>
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
                    className="dark" 
                    >
                    
                        {
                            (numero)=>(
                                <SelectItem key={numero.num} style={{color:'gray'}} textValue={numero.num}>
                                    {numero.num} ({numero.nom})
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
                    className="dark" 
                    >
                    
                        {
                            (numero)=>(
                                <SelectItem key={numero.num} style={{color:'gray'}} textValue={numero.num}>
                                    {numero.num} ({numero.nom})
                                </SelectItem>
                            )
                        }
                    </Select>
                    <Input size="md" value={formData.montantVirement} onChange={handleChange} style={{ color: "#FFFFFF" }} className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à Verser*</label>} name="montantVirement"/>
                    <Input size="md" value={formData.dateVersement} onChange={handleChange} style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date*</label>} name="dateVersement"/>
                </div>
                <div className='SignupBtn flex flex-wrap gap-2 mt-2'>
                    <button
                    type='button'
                    style={{background:"none",border:"2px solid white",color:"white"}}
                    className="px-4 py-2 flex-1 rounded-xl opacity-50 bg-slate-500">
                        Annuler
                     </button>
                     <button type= "submit"  style={{background:"#35442E",color:"#9FF383"}} className='BtnSignup px-4 flex-1 py-2 rounded-xl'>Virer</button>
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