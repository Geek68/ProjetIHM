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

export async function GetPret(){
    const reponse = await axios.get<[]>('http://localhost:4000/prets')
    return (reponse.data)
}

var uuid=''
export async function EditPret(formData: FormData)  {
    console.log(uuid)
    const { numeroCompte,montantPret,tauxPret,delaiPret,datePret} = Pret.parse({
        numeroCompte: formData.get('numCompte'),
        montantPret: formData.get('montantPret'),
        tauxPret: formData.get('tauxPret'), 
        datePret: formData.get('datePret'), 
        delaiPret: formData.get('delaiPret'), 
           
    })
     console.log(numeroCompte,montantPret,tauxPret,delaiPret,datePret)
    try{
        const reponse  = await axios.patch(`http://localhost:4000/prets/${uuid}`,{ 
            numeroCompteEmprunteur: numeroCompte,
            montantPret: montantPret,
            tauxPret: tauxPret,
            datePret: datePret,
            delaiPret: delaiPret,})
     }
     catch(err){
         console.log(err)
     }

   console.log("Modification successful")
}



const Rembourser = z.object({
    
    numeroCompte: z.string().nonempty(),
    montantAPayer: z.coerce.number(),
    numeroPret: z.string().nonempty(),
    numeroBank:z.string().nonempty(),

})
export async function Rembourse(formData: FormData)  {
    const { numeroCompte,montantAPayer,numeroPret,numeroBank} = Rembourser.parse({
        numeroCompte: formData.get('numCompte'),
        montantAPayer: formData.get('montantPayer'),
        numeroPret: formData.get('numeroPret'),
        numeroBank: formData.get('bank')
           
    })
     
    try{
        const reponse  = await axios.post('http://localhost:4000/remboursements',{ 
            numeroCompteVerseur: numeroCompte,
            montantAPayer: montantAPayer,
            numeroPretPourLeRemboursement: numeroPret,
            numeroCompteDeLaBanque:numeroBank
        })
            console.log("remboursement Fait")
     }
     catch(err){
         console.log(err)
     }

   console.log("Modification successful")
}


export async function SuppressionPret(id: string) {
    try{
        const reponse  = await axios.delete(`http://localhost:4000/prets/${id}`) 
        console.log("Suppression successful")
    }
    catch (e)
    {
        console.log(e)
    }
}

export async function RecupIdPret(id: string): Promise<string> 
    {       
            uuid = id
            return id 
    }
export async function GetTotalPretPaye(){
        const reponse = await axios.get('http://localhost:4000/prets/nombreTotalPretPaye')
        return (reponse.data)
    }

export async function GetTotalPretNonPaye(){
        const reponse = await axios.get('http://localhost:4000/prets/nombreTotalPretNonPaye')
        return (reponse.data)
    }
    