"use server"
import { z } from 'zod';
import axios from 'axios';
///création de type de donnéé Virement
const Pret= z.object({
    numeroCompte: z.string().nonempty(),
    montantPret: z.coerce.number().min(10000),
    tauxPret: z.coerce.number(),
    datePret: z.coerce.date(),
    delaiPret: z.coerce.number(),
})


export async function PretMoney (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const PretData = Pret.safeParse({
            numeroCompte: formData.numeroCompte,
            montantPret: formData.montantPret,
            tauxPret: formData.tauxPret,
            datePret: formData.datePret,
            delaiPret: formData.delaiPret,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!PretData.success)
        {
            const errorMessage = PretData.error.issues.map(issue=>{
                switch(issue.code)
                {
                    case "too_small":
                        if (issue.path[0] =="montantVirement")
                        {
                            return("Le Retrait doit être au moins 10 000ar")
                        }
                        else
                        {
                            return("le "+issue.path[0]+" est vide, Veuillez rmplir le champ")
                        }
                    case "invalid_type":
                        return ("le type de "+ issue.path[0]+" est incorrecte, Verifiez s'il vous plait")
                }
                // return{
                //     champ: issue.path[0],
                //     type: issue.code,
                //     message : issue.message
                // }
               
            })
           const reponse={
             reussie: false,
             mess: errorMessage
             
           }
            return(reponse)
        }
        else
        {
            var reponse=
            {
            reussie: true,
            mess: "Pret fait avec sucees"
            
            }
           const res= await axios.post('http://localhost:4000/prets',{
            numeroCompteEmprunteur: PretData.data.numeroCompte,
            montantPret: PretData.data.montantPret,
            tauxPret: PretData.data.tauxPret,
            datePret: PretData.data.datePret,
            delaiPret: PretData.data.delaiPret,
            })
            return (reponse) 
        }
         ///récuperation d'erreur
    }
    catch(err)
    {
        console.log(err)
    }
  
}

