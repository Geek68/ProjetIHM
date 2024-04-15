"use server"
import { z } from 'zod';
///création de type de donnéé Virement
const Virer= z.object({
    NumCompteDestinataire: z.string().nonempty(),
    NumCompteExpeditaire: z.string().nonempty(),
    dateVersement: z.coerce.date(),
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
            dateVersement: formData.dateVersement,
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
                mess: VirerData.data.NumCompteDestinataire + VirerData.data.NumCompteExpeditaire+ VirerData.data.montantVirement
            }
          return(reponse)
        }
         ///récuperation d'erreur
    }
    catch(err)
    {
        console.log(err)
    }
  
}

