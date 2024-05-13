"use server"
import { z } from 'zod';
import axios from 'axios';
import {unstable_noStore as noStore} from 'next/cache'
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
            var reponse=
                {
                reussie: true,
                mess: "Ajout Reussie"
                
                }
               const res= await axios.post('http://localhost:4000/clients',{
                nomClient: ClientData.data.nom,
                prenomsClient: ClientData.data.prenom,
                addresseClient: ClientData.data.adresse,
                emailClient:ClientData.data.email,
                telephoneClient: ClientData.data.tel,
                montantClient: ClientData.data.montant,
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


export async function GetClient(){
    noStore()
    const reponse = await axios.get<[]>('http://localhost:4000/clients')
    return (reponse.data)
}

var uuid=''
export async function EditClient(formData: FormData)  {
    console.log(uuid)
    const {nom,prenom,adresse,tel,email,montant} =Client.parse({
            nom: formData.get('nom'),
            prenom: formData.get('prenom'),
            adresse: formData.get('adresse'), 
            tel: formData.get('tel'), 
            email: formData.get('email'), 
            montant: formData.get('montant'), 
    })
        const reponse  = await axios.patch(`http://localhost:4000/clients/${uuid}`,{ 
            nomClient: nom,
        prenomsClient: prenom,
        addresseClient: adresse,
        emailClient:email,
        telephoneClient: tel,
        montantClient: montant,})


        }
       




export async function SuppressionClient(numeroCompte: string) {
    console.log(numeroCompte)
    try{
        const reponse  = await axios.delete(`http://localhost:4000/clients/${numeroCompte}`) 
       
    }
    catch (e)
    {
        console.log(e)
    }
}

export async function RecupId(id: string): Promise<string> 
    {       
            uuid = id
            return id 
    }