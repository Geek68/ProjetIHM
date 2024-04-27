"use server"
import { z } from 'zod';
import axios from 'axios';
import { redirect } from "next/navigation"

///création de type de donnéé Inscription
const Inscr = z.object({
   nom: z.string().nonempty(),
    prenom:z.string().nonempty(),
    tel: z.string().nonempty().min(10).max(10),
    email:z.string().email().nonempty(),
    password:z.string().min(8),
    numeroCaisse:z.string().min(8),
})

export async function Inscription (formData:object)
{
    //création avec retour erreur ou succes
    const InscrData = Inscr.safeParse({
        nom: formData.nom,
        prenom: formData.prenom,
        adresse: formData.adresse,
        tel: formData.tel,
        email: formData.email,
        password: formData.password,
        numeroCaisse:formData.numeroCaisse
     
    })
    //création avec retour erreur ou succes

    ///récuperation d'erreur de fromat de donnée
    if(!InscrData.success)
    {
        const errorMessage = InscrData.error.issues.map(issue=>{
            switch(issue.code)
            {
                case "too_small":
                    if(issue.path[0]=="password")
                    {
                        return("Mot de password doit avoir au moins 8 caractère")
                    }
                    else if(issue.path[0]=="repassword")
                    {
                        return("Validation de Mot de passe doit avoir au moins 8 caractère")
                    }
                    else if(issue.path[0]=="tel")
                    {
                        return("Caractère de tel insuffisant, Veuillez verifier")
                    }
                    else
                    {
                        return("le "+issue.path[0]+" est vide, Veuillez remplir le champ")
                    }
                case "invalid_type":
                    return ("le type de "+ issue.path[0]+" est incorrecte, Verifiez s'il vous plait")
                case "invalid_string":
                     return ("l'email doit de la forme  ...@gmail.com")
                case "too_big":
                    return ("Tel invalide, il ne doit que comporter que 10caractère")

            }
           
        })
       const reponse={
         reussie: false,
         mess: errorMessage
         
       }
        return(reponse)
    }
    else
    {
      
        const res= await axios.post('http://localhost:4000/authentification/register',{ 
            nomCaissier: InscrData.data.nom,
            prenomsCaissier: InscrData.data.prenom,
            emailCaissier:InscrData.data.email,
            telephoneCaissier: InscrData.data.tel,
            password: InscrData.data.password,
            numeroCaisse: InscrData.data.numeroCaisse})
            if (res.data)
                {
                    console.log(res.data)
                    redirect("/home") ///redirection vers la page home
                }
    }
  
}


///Création des donnée Connexion
const connex = z.object({
     email:z.string().email().nonempty(),
     password:z.string().min(8),
 })

 export async function Connexion (formData:object)
{
    //création avec retour erreur ou succes
    const ConnexData = connex.safeParse({
        email: formData.email,
        password: formData.password,
    })
    //création avec retour erreur ou succes

    ///récuperation d'erreur de fromat de donnée
    if(!ConnexData.success)
    {
        const errorMessage = ConnexData.error.issues.map(issue=>{
            switch(issue.code)
            {
                case "too_small":
                    return("le "+issue.path[0]+" est vide, Veuillez remplir le champ")
                case "invalid_string":
                    return ("l'email doit de la forme  ...@gmail.com")

            }
        
        })
    const reponse={
        reussie: false,
        mess: errorMessage
        
    }
        return(reponse)
    }
    else
    {
       
        const res= await axios.post('http://localhost:4000/authentification/login',{ 
            emailCaissier: ConnexData.data.email,
            password: ConnexData.data.password,
           })
            if(res.data.access_token==="No")
                {
                    const reponse = {
        
                        reussie: false,
                        mess: ["Email ou mot de passe incorrect"]
                        
                    }
                    return(reponse)
                    
                }
                else
                {
                    
                    const reponse={
                        reussie: true,
                        mess: res.data.access_token
                        
                    }
                    return(reponse)
                   
                }
    }
    ///récuperation d'erreur
}