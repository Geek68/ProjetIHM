"use server"
import { z } from 'zod';
///création de type de donnéé Inscription
const Inscr = z.object({
   nom: z.string().nonempty(),
    prenom:z.string().nonempty(),
    tel: z.string().nonempty().min(10).max(10),
    email:z.string().email().nonempty(),
    password:z.string().min(8),
    dateNaissance:z.coerce.date() ///Modifier en format jj-mm-aaaa
})
export async function Inscription (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const ClientData = Inscr.safeParse({
            nom: formData.nom,
            prenom: formData.prenom,
            adresse: formData.adresse,
            tel: formData.tel,
            email: formData.email,
            password: formData.password,
            dateNaissance: formData.dateNaissance,
        
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!ClientData.success)
        {
            const errorMessage = ClientData.error.issues.map(issue=>{
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
            const reponse={
                reussie: true,
                mess: ClientData.data.dateNaissance+ClientData.data.tel
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


///Création des donnée Connexion
const connex = z.object({
     email:z.string().email().nonempty(),
     password:z.string().min(8),
 })

 export async function Connexion (formData:object)
{
    try
    {
        //création avec retour erreur ou succes
        const ClientData = connex.safeParse({
            email: formData.email,
            password: formData.password,
        })
        //création avec retour erreur ou succes

        ///récuperation d'erreur de fromat de donnée
        if(!ClientData.success)
        {
            const errorMessage = ClientData.error.issues.map(issue=>{
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
            const reponse={
                reussie: true,
                mess: "connected"
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