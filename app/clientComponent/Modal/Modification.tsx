"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip,Input} from "@nextui-org/react";
import { EditIcon } from "@/app/Composants/EditIcon";
import { EditClient } from "@/lib/donneClient";
import { RecupId } from "@/lib/donneClient";
import {toast } from 'react-toastify';
export default function ModifcationClient({data}:{data:object}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} className="text-lg text-default-400 cursor-pointer active:opacity-50" size="sm" isIconOnly={true} style={{background:"none"}}>
      <Tooltip color="primary" content="Modifier l'info">
              <span >
                <EditIcon />
              </span>
        </Tooltip>
      </Button>
      <Modal 
      backdrop="blur"
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
             <form action={EditClient}>
                <ModalBody className="flex flex-row justify-center" >
                        <div className="flex flex-col gap-4 w-4/5 ">
                            <Input size="md"  style={{ color: "black" }} className="text-xl" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Nom*</label>} name="nom" defaultValue={data.nomClient}/>
                            <Input size="md"  style={{ color: "black" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Prenoms*</label>} name="prenom" defaultValue={data.prenomsClient}/>
                            <Input size="md"  style={{ color: "black" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Addresse*</label>} name="adresse" defaultValue={data.addresseClient}/>
                            <Input size="md" style={{ color: "black" }}className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Tel*</label>} name="tel" defaultValue={data.telephoneClient}/>
                            <Input size="md" style={{ color: "black" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Email*</label>} name="email" defaultValue={data.emailClient}/>
                            <Input size="md" style={{ color: "black" }} className="Input" variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Depôt Initial*</label>} name="montant" defaultValue={data.montantClient}/>
                        </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Non
                    </Button>
                    <Button color="primary" type="submit" onPress={()=>{onClose(),RecupId(data.numeroCompte).then(()=>{location.reload()})}}>
                      Oui
                    </Button>
                  </ModalFooter>
             </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
