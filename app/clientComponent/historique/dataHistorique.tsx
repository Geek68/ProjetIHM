import { useEffect, useState } from "react";
import { GetHistorique } from "@/lib/historique";
export function DonneHistorique() {
    const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
    useEffect(() => {
        GetHistorique()
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log("Erreur:", error);
        });
    }, []); 
    return (data);
  }