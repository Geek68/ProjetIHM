"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip,Input,Select,SelectItem} from "@nextui-org/react";
import { EditIcon } from "@/app/Composants/EditIcon";
import { NumComptes } from "@/app/Composants/dataDonnee";
export default function ModifcationPrêt() {
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
              <ModalHeader className="flex flex-col gap-1 text-xl text-green-400">Changer l'information du depôt</ModalHeader>
              <ModalBody className="flex flex-row justify-center" >
                    <div className="flex flex-col gap-4 w-4/5 ">
                    <Select
                    items={NumComptes}
                    label="Compte à Verser"
                    placeholder="Choisir le compte"
                    labelPlacement="outside"
                    className="dark" 
                    >
                    
                        {
                            (numero)=>(
                                <SelectItem key={numero.num} style={{color:'gray'}} textValue={numero.num}>
                                    {numero.num} ({numero.nom})
                                </SelectItem>
                            )
                        }
                    </Select>
                    <Input size="md"  style={{ color: "#FFFFFF" }} className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à verser*</label>} name="prenom"/>
                    <Input size="md" style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Taux du pret*</label>} name="tel"/>
                    <Input size="md" style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date du Pret*</label>} name="adresse"/>
                    <Input size="md" style={{ color: "#FFFFFF" }} className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date du Delais</label>} name="tel"/>
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
