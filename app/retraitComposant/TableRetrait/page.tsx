"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Input} from "@nextui-org/react";
import { EditIcon } from "../../Composants/EditIcon";
import { DeleteIcon } from "../../Composants/DeleteIcon";
import { columns } from "./dataretrait";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModifcationRetrait from "../Modal/Modification";
import DeleteRetrait from "../Modal/delete";
import { DonneeRetrait } from "./dataretrait";
import axios from "axios";
import { useState } from "react";
export default function TableRetrait() {
  const Indata= DonneeRetrait()
  var retrait;

  const [vide,setVide] = useState(true)
  const [result,setResult] = useState([])

  ///condition d'affiche
if(vide==true)
  {
    retrait= Indata
  }
else
{
  retrait = result
}
///condition d'affiche
  const DateConversion = (date: Date)=>{
    const parsedDate = new Date(date)
    const formatteDate = parsedDate.toISOString().slice(0, 10)
    return formatteDate
  }
  type User = typeof retrait[0];
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "numeroCompte":
        return (
          <p>{cellValue}</p>
        );
      case "montantRetrait":
        return (
            <p>{cellValue}</p>
        );
      case "dataRetrait":
        return (
          <p>{DateConversion(cellValue)}</p>
        );
      default:
        return cellValue;
    }
  }, []);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(retrait.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return retrait.slice(start, end);
  }, [page, retrait]);

  const handleSearch = (e)=>{
    if(e.target.value !='')
      {
        axios.post(`http://localhost:4000/retraits/${e.target.value}`)
        .then(res=>{setResult(res.data)})
        setVide(false)
      }
      else
      {
        setVide(true)
      }
  }
  return (
    <div style={{background:"white"}} className="p-8 flex flex-col gap-6 w-2/3 rounded-3xl">
      <div className="flex flex-row justify-between items-center">
          <h1 style={{color:"#24D26D",fontSize:"20px"}}>Les retraits faits</h1>
          <Input type="text" className="w-1/4 rounded-full text-black" variant="flat" onChange={handleSearch}  placeholder="recherche Client" startContent={<FontAwesomeIcon icon={faSearch}  color="gray"  width={20} height={20}/>}/>
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
          <TableRow key={item.numeroRetraits}>
            {(columnKey) => <TableCell>{
                        columnKey === "action" ? (
                          <div className="relative flex items-center gap-2">
                          <ModifcationRetrait data={item}/>
                          <DeleteRetrait data={item}/>
                        </div>
                      )
                      :
                      (renderCell(item, columnKey))
                      }</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}
