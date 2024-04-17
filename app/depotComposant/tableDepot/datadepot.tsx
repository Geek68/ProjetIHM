import { useEffect,useState } from "react";
import { GetVersement } from "@/lib/donneeVersement";
export const columns = [
    {name: "Compte_Versé", uid: "numeroCompteVersement"},
    {name: "Montant", uid: "montantVersement"},
    {name: "Date", uid: "dateVersement"},
    {name: "Nom_Verseur", uid: "nomVerseur"},
    {name: "Prenom_Verseur", uid: "prenomsVerseur"},
    {name: "ACTION", uid: "action"}
  ];
  ///donnnee user venant du base de donnée
  export function DonneeVersement() {
    const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
    useEffect(() => {
      GetVersement()
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log("Erreur:", error);
        });
    }, []); 
    return (data);
  }