"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Input} from "@nextui-org/react";
import { EditIcon } from "../../Composants/EditIcon";
import { DeleteIcon } from "../../Composants/DeleteIcon";
import { users,columns } from "./datadepot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type User = typeof users[0];

export default function TableDepot() {
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
      
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="primary" content="Modifier l'info">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Supprumer ce client">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
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
