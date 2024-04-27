"use client"
import React from "react";
import {EyeFilledIcon} from "../Composants/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../Composants/EyeSlashFilledIcon";
import { Input } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Inscription } from "@/lib/donneAuthentification";
import './signIn.css'
import Link from "next/link";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SingIn()
{
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [Visible, setVisible] = React.useState(false);
    const toggleIsVisibility = () => setVisible(!Visible);
    //Gestion d'erreur 
    const [formData, setFormData] = React.useState({
        nom: "",
        prenom: "",
        tel: "",
        email:"",
        password: "",
        numeroCaisse:""
        // dateNaissance: null,
      });
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };


      async function handleSubmit(event) {
        event.preventDefault();
       try{
            const reponse =  await Inscription(formData)
            if(reponse!=undefined)
                {
                    if(!reponse.reussie)
                        {
                        reponse.mess.map(err=>{
                            toast.error(err)
                        });
                        }
                }
          
       
       }
       catch(error){
           console.log(error)
       }
    };
    //Gestion d'erreur
    return (
        <div className="SignInBody p-3">
            <div className="SingInParent rounded-xl w-4/5">
            <Link href="/"><FontAwesomeIcon icon={faClose} className="close" color="gray"  width={50} height={50}/></Link>
            <div className=" flex flex-col gap-10 items-center p-8">
                    <h1 className="SignIntitre text-3xl"> $ Formulaire d'Inscription $</h1>
                    <form className="flex flex-col gap-8 items-center w-4/5" onSubmit={handleSubmit}>
                    <Input size="md" name="nom" value={formData.nom} onChange={handleChange} style={{ color: "#000000" }}  className="Input"  variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Nom*</label>}/>
                    <Input size="md" name="prenom" value={formData.prenom} onChange={handleChange} style={{ color: "#000000" }}  className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Prénoms*</label>}/>
                    <Input size="md" name="tel" value={formData.tel} onChange={handleChange} style={{ color: "#000000" }} className="Input"  variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Téléphone*</label>}/>
                    <Input size="md" name="email" value={formData.email} onChange={handleChange} style={{ color: "#000000" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Email*</label>}/>
                    <Input size="md" name="numeroCaisse" value={formData.numeroCaisse} onChange={handleChange}style={{ color: "#000000" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>N° Caisse*</label>}/>
                    <Input
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
                       label={<label style={{ color: 'gray' }}>Mot de Passe*</label>}
                        variant="underlined"
                        className="Input"
                        style={{ color: "#000000" }}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                                </button>
                            }
                        type={isVisible ? "text" : "password"}
                        />
                        <div className="flex flex-col gap-7 items-center">
                            <p className="text-center text-gray-500">Cliquez sûr confirmer pour s'incrire, Avez-vous déjà un compte ? <Link href="/singnUp" style={{color:"#24D26D"}}>Se connecter</Link></p>
                            <button className="text-2xl px-10 py-2 rounded-xl"  style={{background:"#24D26D",color:"white"}} >Confirmer</button>
                        </div>
                    </form>
            </div>
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
    )
}