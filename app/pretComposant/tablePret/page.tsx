"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Input} from "@nextui-org/react";
import { EditIcon } from "../../Composants/EditIcon";
import { DeleteIcon } from "../../Composants/DeleteIcon";
import { columns } from "./dataPret";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModifcationPrêt from "../Modal/Edit";
import DeletePret from "../Modal/Delete";
import { DonneePret } from "./dataPret";
import { useState } from "react";
import axios from "axios";
import Remboursement from "../Modal/Remboursement";
export default function TablePret() {
  const Indata= DonneePret()
  var pret;

  const [vide,setVide] = useState(true)
  const [result,setResult] = useState([])

  ///condition d'affiche
if(vide==true)
  {
    pret = Indata
  }
else
{
  pret = result
}
///condition d'affiche
  const DateConversion = (date: Date)=>{
    const parsedDate = new Date(date)
    const formatteDate = parsedDate.toISOString().slice(0, 10)
    return formatteDate
  }


  type User = typeof pret[0];
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
        case "numeroCompte":
          return (
            <p>{cellValue}</p>
          );
        case "montantPret":
          return (
              <p>{cellValue}</p>
          );
        case "tauxPret":
          return (
              <p>{cellValue} %</p>
          );
        case "datePret":
          return (
            <p>{DateConversion(cellValue)}</p>
          );
       case "delaiPret":
          return (
              <p>{cellValue} mois</p>
          );
        
        default:
          return cellValue;
      }
  }, []);

  const handleSearch = (e)=>{
    if(e.target.value !='')
      {
        axios.post(`http://localhost:4000/prets/${e.target.value}`)
        .then(res=>{setResult(res.data)})
        setVide(false);
      }
      else
      {
        setVide(true); 
      }
    }

  
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(pret.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return pret.slice(start, end);
  }, [page, pret]);

  
  return (
    <div style={{background:"white"}} className="p-8 flex flex-col gap-6 w-2/3 rounded-3xl">
      <div className="flex flex-row justify-between items-center">
          <h1 style={{color:"#24D26D",fontSize:"20px"}}>Les Prêts en ce moment</h1>
          <Input type="text" className="w-1/4 rounded-full text-black" variant="flat"  onChange={handleSearch} placeholder="recherche Client" startContent={<FontAwesomeIcon icon={faSearch}  color="gray"  width={20} height={20}/>}/>
      </div>
      <Table 
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="success"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
              </div>
              }
          >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "action" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      {/* items.key change en items.numero.versement */}
      <TableBody items={items}  style={{color:"gray"}}>
        {(item) => (
          <TableRow key={item.numeroPret} >
            {(columnKey) => <TableCell>
              {
                        columnKey === "action" ? (
                          <div className="relative flex items-center gap-2">
                          <ModifcationPrêt data={item}/>
                          <Remboursement data={item}/>
                          <DeletePret data={item}/>
                        </div>
                      )
                      :
                      (renderCell(item, columnKey))
                      }
              </TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}
