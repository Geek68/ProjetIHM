"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Input} from "@nextui-org/react";
import { EditIcon } from "../../Composants/EditIcon";
import { DeleteIcon } from "../../Composants/DeleteIcon";
import { users,columns } from "./datadepot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModifcationDepôt from "../Modal/Edit";
import DeleteDepôt from "../Modal/delete";
type User = typeof users[0];

export default function TableDepot() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "numeroCompte":
        return (
          <p>{cellValue}</p>
        );
      case "montantVersement":
        return (
            <p>{cellValue}</p>
        );
      case "dataVersement":
        return (
            <p>{cellValue}</p>
        );
      case "nomVerseur":
        return (
            <p>{cellValue}</p>
        );
     case "prenomVerseur":
        return (
            <p>{cellValue}</p>
        );
     case "TelVerseur":
          return (
              <p>{cellValue}</p>
          );
      
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <ModifcationDepôt/>
            <DeleteDepôt/>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);


  return (
    <div style={{background:"#282828"}} className="p-8 flex flex-col gap-6 w-2/3 rounded-3xl">
      <div className="flex flex-row justify-between items-center">
          <h1 style={{color:"#9FF383",fontSize:"20px"}} >Les Versements faits</h1>
          <Input type="text" className="w-1/4 rounded-full dark" variant="faded"   placeholder="recherche Client" startContent={<FontAwesomeIcon icon={faSearch}  color="gray"  width={20} height={20}/>}/>
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
            className="dark">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "action" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      {/* items.key change en items.numero.versement */}
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}
