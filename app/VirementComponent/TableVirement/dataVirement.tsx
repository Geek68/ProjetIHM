import { useEffect,useState } from "react";
import { GetVirement } from "@/lib/donneeVirement";
export const columns = [
    {name: "Compte Expediteur", uid: "numeroCompteExpediteur"},
    {name: "Compte Destinataire", uid: "numeroCompteDestinataire"},
    {name: "Montant", uid: "montantVirement"},
    {name: "Date", uid: "dateVirement"},
    {name: "ACTION", uid: "action"}
  ];
  export function DonneeVirement() {
    const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
    useEffect(() => {
      GetVirement()
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log("Erreur:", error);
        });
    }, []); 
    return (data);
  }