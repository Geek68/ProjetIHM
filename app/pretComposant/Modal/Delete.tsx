"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip} from "@nextui-org/react";
import { DeleteIcon } from "@/app/Composants/DeleteIcon";
import { SuppressionPret } from "@/lib/donnneePret";
export default function DeletePret({data}:{data:object}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} size="sm" isIconOnly={true} style={{background:"none"}}>
      <Tooltip color="danger" content="Supprumer ce client">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-700 text-2xl mb-5">Suppression</ModalHeader>
              <ModalBody>
              <p className="text-black">
                 Le <span  style={{color:"#242423",fontWeight:"bold"}}>{data.numeroPret}</span> du compte <span  style={{color:"#242423",fontWeight:"bold"}}>{data.numeroCompteEmprunteur}</span><br/>
                  va être Supprumer, voulez-vous vraiment ?<br/><br/>
                  NB: il n'y a pas de rétour en arrière si le versement est effacé
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Non
                </Button>
                <Button color="primary" onPress={()=>{SuppressionPret(data.numeroPret),onClose()}}>
                  Oui
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
