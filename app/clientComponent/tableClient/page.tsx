"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Input} from "@nextui-org/react";
import { columns } from "./dataClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModifcationClient from "../Modal/Modification";
import DeleteClient from "../Modal/delete";
import { DonneeClient } from "./dataClient";
export default function TableClient() {
  const users = DonneeClient()
  type User = typeof users[0];
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "nom":
        return (
          <p>{cellValue}</p>
        );
      case "prenom":
        return (
            <p>{cellValue}</p>
        );
      case "adresse":
        return (
            <p>{cellValue}</p>
        );
      case "téléphone":
        return (
            <p>{cellValue}</p>
        );
     case "Montant":
        return (
            <p>{cellValue}</p>
        );
      default:
        return cellValue;
    }
  }, []);
  ///Pagination
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 3;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
  ///Pagination


  ///style de ligne cliquée
 
   ///style de ligne cliquée

  return (
    <div className="p-8 flex flex-col gap-6 w-2/3 rounded-3xl h-full" style={{background:"white"}}>
      <div className="flex flex-row justify-between items-center">
          <h1 style={{color:"#24D26D",fontSize:"20px"}} >Clients ayant un compte</h1>
          <Input type="text" className="w-1/4 rounded-full text-black" variant="flat"   placeholder="recherche Client" startContent={<FontAwesomeIcon icon={faSearch}  color="gray"  width={20} height={20}/>}/>
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
            className="ligth">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "action" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items} style={{color:"gray"}}>
        {(item) => (
          <TableRow key={item.numeroCompte}>
                    {(columnKey) =>( <TableCell>
                          {columnKey === "action" ? (
                            <div className="relative flex flex-row">
                              <ModifcationClient data={item} />
                              <DeleteClient data={item} />
                            </div>
                          ) : (
                            renderCell(item, columnKey)
                          )}
                  </TableCell>)}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );  
}
