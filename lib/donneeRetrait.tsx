"use server"
import { z } from 'zod';
///création de type de donnéé Retrait
const Retrait= z.object({
    numeroCompte: z.string().nonempty(),
    dateRetrait: z.coerce.date(),
    montantRetrait: z.coerce.number().min(10000),
})

export async function RetraitArgent (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const RetraitData = Retrait.safeParse({
            numeroCompte: formData.numeroCompte,
            dateRetrait: formData.dateRetrait,
            montantRetrait: formData.montantRetrait,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!RetraitData.success)
        {
            const errorMessage = RetraitData.error.issues.map(issue=>{
                switch(issue.code)
                {
                    case "too_small":
                        if (issue.path[0] =="montantRetrait")
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
                mess: RetraitData.data.numeroCompte + RetraitData.data.montantRetrait
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

