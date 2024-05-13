"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip} from "@nextui-org/react";
import { DeleteIcon } from "@/app/Composants/DeleteIcon";
import { SuppressionVirement } from "@/lib/donneeVirement";
export default function DeleteVirement({data}:{data:object}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} size="sm" isIconOnly={true} style={{background:"none"}}>
      <Tooltip color="danger" content="Supprumer l'enregistrement">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-700 text-2xl mb-5">Suppression</ModalHeader>
              <ModalBody>
                <p className="text-black">
                 le Virement du compte <span  style={{color:"#242423",fontWeight:"bold"}}>{data.numeroCompteExpediteur}</span> vers <br/>
                  le compte <span  style={{color:"#242423",fontWeight:"bold"}}>{data.numeroCompteDestinataire}</span> va être supprumer <br/>
                 êtes-vous sûr ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Non
                </Button>
                <Button color="primary" onPress={()=>{SuppressionVirement(data.numeroVirement).then(()=>{location.reload()}),onClose()}}>
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
