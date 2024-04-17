import { useEffect,useState } from "react";
import { GetRetrait } from "@/lib/donneeRetrait";
export const columns = [
    {name: "Compte_tiré", uid: "numeroCompte"},
    {name: "Montant", uid: "montantRetrait"},
    {name: "Date", uid: "dateRetrait"},
    {name: "ACTION", uid: "action"}
  ];
  export function DonneeRetrait() {
    const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
    useEffect(() => {
      GetRetrait()
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log("Erreur:", error);
        });
    }, []); 
    return (data);
  }