import { useEffect,useState } from "react";
import { GetPret } from "@/lib/donnneePret";
export const columns = [
    {name: "Compte", uid: "numeroCompteEmprunteur"},
    {name: "MontantPret", uid: "montantPret"},
    {name: "Montant à Rendre", uid: "montantARendre"},
    {name: "Reste du montant", uid: "restePret"},
    {name: "Taux", uid: "tauxPret"},
    {name: "Date", uid: "datePret"},
    {name: "Delais", uid: "delaiPret"},
    {name: "ACTION", uid: "action"}
  ];
  export function DonneePret() {
    const [data, setData] = useState([]); // Utiliser useState à l'intérieur du composant
    useEffect(() => {
      GetPret()
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log("Erreur:", error);
        });
    }, []); 
    return (data);
  }