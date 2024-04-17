import { useEffect, useState } from "react";
import { GetClient } from "@/lib/donneClient";

export const columns = [
  { name: "NOM", uid: "nomClient" },
  { name: "PRENOMS", uid: "prenomsClient" },
  { name: "ADRESSE", uid: "addresseClient" },
  { name: "TELEPHONE", uid: "telephoneClient" },
  { name: "EMAIL", uid: "emailClient" },
  { name: "MONTANT", uid: "montantClient" },
  { name: "ACTION", uid: "action" },
];

export function DonneeClient() {
  const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
  useEffect(() => {
    GetClient()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log("Erreur:", error);
      });
  }, []); 
  return (data);
}
 // Appeler DonneeClient pour rendre le composant
