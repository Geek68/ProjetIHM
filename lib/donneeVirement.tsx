"use server"
import { z } from 'zod';
import axios from 'axios';
import {unstable_noStore as noStore} from 'next/cache'
///création de type de donnéé Virement
const Virer= z.object({
    NumCompteDestinataire: z.string().nonempty(),
    NumCompteExpeditaire: z.string().nonempty(),
    dateVirement: z.coerce.date(),
    montantVirement: z.coerce.number().min(10000),
})

export async function VirerMoney (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const VirerData = Virer.safeParse({
            NumCompteDestinataire: formData.NumCompteDestinataire,
            NumCompteExpeditaire: formData.NumCompteExpeditaire,
            dateVirement: formData.dateVirement,
            montantVirement: formData.montantVirement,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!VirerData.success)
        {
            const errorMessage = VirerData.error.issues.map(issue=>{
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
            const reponse={
                reussie: true,
                mess:"Argent virée avec success"
            }
            const res = await axios.post('http://localhost:4000/virements',{
                numeroCompteDestinataire: VirerData.data.NumCompteDestinataire,
                numeroCompteExpediteur:  VirerData.data.NumCompteExpeditaire,
                montantVirement:  VirerData.data.montantVirement,
                dateVirement:  VirerData.data.dateVirement,
              
                })
          return(reponse)
        }
         ///récuperation d'erreur
    }
    catch(err)
    {
        console.log(err)
    }
  
}

export async function GetVirement(){
    noStore()
    const reponse = await axios.get<[]>('http://localhost:4000/virements')
    return (reponse.data)
}