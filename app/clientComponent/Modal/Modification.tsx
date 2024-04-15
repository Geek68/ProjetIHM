"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip,Input} from "@nextui-org/react";
import { EditIcon } from "@/app/Composants/EditIcon";
export default function ModifcationClient() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} size="sm" isIconOnly={true} style={{background:"none"}}>
      <Tooltip color="primary" content="Modifier l'info">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
        </Tooltip>
      </Button>
      <Modal 
      backdrop="blur"
       className="dark"
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent  >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl text-green-400">Modification de l'information du client</ModalHeader>
              <ModalBody className="flex flex-row justify-center" >
                    <div className="flex flex-col gap-4 w-4/5 ">
                        <Input size="md"  style={{ color: "#FFFFFF" }} className="text-xl" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Nom*</label>} name="nom"/>
                        <Input size="md"  style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Prenoms*</label>} name="prenom"/>
                        <Input size="md"  style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Addresse*</label>} name="adresse"/>
                        <Input size="md"   style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Tel*</label>} name="tel"/>
                        <Input size="md" style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Email*</label>} name="email"/>
                        <Input size="md" style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Depôt Initial*</label>} name="montant"/>
                    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Non
                </Button>
                <Button color="primary" onPress={onClose}>
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
