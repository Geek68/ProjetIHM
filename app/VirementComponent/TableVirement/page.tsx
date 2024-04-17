"use client"
import React from "react";
import {Pagination,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Input} from "@nextui-org/react";
import { columns } from "./dataVirement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModifcationVirement from "../Modal/Edit";
import DeleteVirement from "../Modal/delete";
import { DonneeVirement } from "./dataVirement";
export default function TableVirement() {
  const users = DonneeVirement()
  type User = typeof users[0];
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "numeroCompteExpediteur":
        return (
          <p>{cellValue}</p>
        );
      case "numeroCompteDestinataire":
        return (
            <p>{cellValue}</p>
        );
      case " montantVirement":
        return (
            <p>{cellValue}</p>
        );
    case "dataVirement":
        return (
            <p>{cellValue}</p>
        );
      case "action":
        return (
          <div className="relative flex items-center gap-2">
          <ModifcationVirement/>
          <DeleteVirement/>
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
    <div style={{background:"white"}} className="p-8 flex flex-col gap-6 w-2/3 rounded-3xl">
      <div className="flex flex-row justify-between items-center">
          <h1 style={{color:"#24D26D",fontSize:"20px"}}>Les Virements</h1>
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
            >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "action" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      {/* items.key change en items.numero.versement */}
      <TableBody items={items} style={{color:"gray"}}>
        {(item) => (
          <TableRow key={item.numeroVirement}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}