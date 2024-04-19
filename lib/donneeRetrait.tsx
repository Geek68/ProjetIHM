"use server"
import { z } from 'zod';
import axios from 'axios';
import {unstable_noStore as noStore} from 'next/cache'
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
            var reponse=
                {
                reussie: true,
                mess: "Argent Retirée"
                
                }
               const res= await axios.post('http://localhost:4000/retraits',{
                numeroCompte: RetraitData.data.numeroCompte,
                dateRetrait: RetraitData.data.dateRetrait,
                montantRetrait: RetraitData.data.montantRetrait
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

export async function GetRetrait(){
    noStore()
    const reponse = await axios.get<[]>('http://localhost:4000/retraits')
    return (reponse.data)
}

var uuid=''
export async function EditRetrait(formData: FormData)  {
    console.log(uuid)
    const { numeroCompte,dateRetrait,montantRetrait} = Retrait.parse({
        numeroCompte: formData.get('numeroCompte'),
        dateRetrait: formData.get('dateRetrait'), 
        montantRetrait: formData.get('montantRetrait'),
           
    })
        const reponse  = await axios.patch(`http://localhost:4000/retraits/${uuid}`,{ 
            numeroCompte: numeroCompte,
            dateRetrait: dateRetrait,
            montantRetrait:montantRetrait
       
   })
   console.log("Modification successful")
}

export async function SuppressionRetrait(id: string) {
    try{
        const reponse  = await axios.delete(`http://localhost:4000/retraits/${id}`) 
        console.log("Suppression successful")
    }
    catch (e)
    {
        console.log(e)
    }
}

export async function RecupIdRetrait(id: string): Promise<string> 
    {       
            uuid = id
            return id 
    }