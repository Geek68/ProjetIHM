"use server"
import { z } from 'zod';
import axios from 'axios';
import {unstable_noStore as noStore} from 'next/cache'
///création de type de donnéé Versement
const Depot= z.object({
    numeroCompte: z.string().nonempty(),
    dateVersement: z.coerce.date(),
    montantVersement: z.coerce.number().min(10000),
    nomVerseur: z.string().nonempty(),
    prenomsVerseur:z.string().nonempty(),
    // telVerseur: z.string().nonempty().min(10).max(10),
})

export async function VerserDepot(formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const DepotData = Depot.safeParse({
            numeroCompte: formData.numeroCompte,
            dateVersement: formData.dateVersement,
            montantVersement: formData.montantVersement,
            nomVerseur: formData.nomVerseur,
            prenomsVerseur: formData.prenomsVerseur,
            // telVerseur: formData.telVerseur,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!DepotData.success)
        {
            const errorMessage = DepotData.error.issues.map(issue=>{
                switch(issue.code)
                {
                    case "too_small":
                        if(issue.path[0] =="telVerseur")
                        {
                            return("Caractère de tel insuffisant, Veuillez verifier")
                        }
                        else if (issue.path[0] =="montant")
                        {
                            return("Le depôt inititale doit être au moins 10 000ar")
                        }
                        else
                        {
                            return("le "+issue.path[0]+" est vide, Veuillez rmplir le champ")
                        }
                    case "invalid_type":
                        return ("le type de "+ issue.path[0]+" est incorrecte, Verifiez s'il vous plait")
                    case "invalid_string":
                         return ("l'email doit de la forme  ...@gmail.com")
                    case "too_big":
                        return ("Tel invalide, il ne doit que comporter que 10caractère")

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
                mess:"Versement fait"
            }
            const res = await axios.post('http://localhost:4000/versements',{
                numeroCompteVersement: DepotData.data.numeroCompte,
                montantVersement:  DepotData.data.montantVersement,
                dateVersement:  DepotData.data.dateVersement,
                nomVerseur:  DepotData.data.nomVerseur,
                prenomsVerseur:  DepotData.data.prenomsVerseur,
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

export async function GetVersement(){
    noStore()
    const reponse = await axios.get<[]>('http://localhost:4000/versements')
    return (reponse.data)
}