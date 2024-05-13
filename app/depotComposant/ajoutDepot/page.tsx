"use client"
import { Input,Select, SelectItem } from "@nextui-org/react"
import React,{useEffect, useState}from "react"
import { DonneeClient } from "@/app/clientComponent/tableClient/dataClient";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './depot.css'
import { VerserDepot } from "@/lib/donneeVersement";
export default function Verser()
{   const NumComptes =DonneeClient()
    const [next, setnext] = useState(0);
    const [Actu,setActu] = useState(false);
    const [formData, setFormData] = useState({
        numeroCompte:"",
        montantVersement: "",
        dateVersement:null,
        nomVerseur:"",
        prenomsVerseur:"",
        // telVerseur:"",
      });
      // Current step (0 or 1)
    

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
     
      
      async function handleSubmit(event) {
        event.preventDefault();
       try{
            const reponse =  await VerserDepot(formData)
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
            <h1 className="text-center text-2xl" style={{color:"#24D26D"}}>Verser</h1>
            <form className="flex flex-col gap-8 w-[250px]" onSubmit={handleSubmit}>
                <div className={`${next === 0 ?"block":"hidden"} part1 flex flex-col gap-3`}>
                    <Select
                    items={NumComptes}
                    value={formData.numeroCompte}
                    onChange={handleChange}
                    name="numeroCompte"
                    label="Compte à Verser"
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
                    <Input size="md" value={formData.montantVersement} onChange={handleChange} style={{ color: "black" }} className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à verser*</label>} name="montantVersement"/>
                    <Input size="md" value={formData.dateVersement} onChange={handleChange} style={{ color: "black" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date*</label>} name="dateVersement"/>
                </div>
                <div className={`${next === 1 ?"block":"hidden"} part2  flex flex-col gap-3`}>
                    <Input size="md" value={formData.nomVerseur} onChange={handleChange} style={{ color: "black" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Nom  du Verseur*</label>} name="nomVerseur"/>
                    <Input size="md" value={formData.prenomsVerseur} onChange={handleChange} style={{ color: "black" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Prenoms  du Verseur*</label>} name="prenomsVerseur"/>
                    {/* <Input size="md" value={formData.telVerseur} onChange={handleChange} style={{ color: "black" }} className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Tel du Vesreur*</label>} name="telVerseur"/> */}
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
                    (<button type= "submit"  style={{background:"#24D26D",color:"white"}}  className='BtnSignup px-4 flex-1 py-2 rounded-xl'>Deposer</button>) : null
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