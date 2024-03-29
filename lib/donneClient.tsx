"use server"
import { z } from 'zod';
///création de type de donnéé client
const Client = z.object({
   nom: z.string().nonempty(),
    prenom:z.string().nonempty(),
    adresse:z.string().nonempty(),
    tel: z.string().nonempty().min(10).max(10),
    email:z.string().email().nonempty(),
    montant:z.coerce.number().min(10000)
})

export async function AjouterClient (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const ClientData = Client.safeParse({
            nom: formData.nom,
            prenom: formData.prenom,
            adresse: formData.adresse,
            tel: formData.tel,
            email: formData.email,
            montant: formData.montant,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!ClientData.success)
        {
            const errorMessage = ClientData.error.issues.map(issue=>{
                switch(issue.code)
                {
                    case "too_small":
                        if(issue.path[0] =="tel")
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
                mess: ClientData.data.nom+ ClientData.data.tel
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

