"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip,Input,Select,SelectItem} from "@nextui-org/react";
import { EditIcon } from "@/app/Composants/EditIcon";
import { EditRetrait,RecupIdRetrait } from "@/lib/donneeRetrait";
import { DonneeClient } from "@/app/clientComponent/tableClient/dataClient";
export default function ModifcationRetrait({data}:{data:object}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const NumComptes =DonneeClient()
  const parsedDate = new Date(data.dateRetrait)
  const formatteDate =parsedDate.toISOString().slice(0, 10)
  console.log(data)
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
              <ModalHeader className="flex flex-col gap-1 text-xl text-green-400">Changer l'information du retrait</ModalHeader>
              <form action={EditRetrait}>
                <ModalBody className="flex flex-row justify-center" >
                      <div className="flex flex-col gap-4 w-4/5 ">
                      <Select
                      items={NumComptes}
                      label="Compte à retraire"
                      placeholder="Choisir le compte"
                      labelPlacement="outside" 
                      defaultSelectedKeys={[data.numeroCompte]}
                      name="numeroCompte"
                      >
                      
                          {
                              (numero)=>(
                                <SelectItem key={numero.numeroCompte} style={{color:'gray'}} textValue={numero.numeroCompte}>
                                {numero.nomClient} {numero.prenomsClient}
                              </SelectItem>
                              )
                          }
                      </Select>
                      <Input size="md"  style={{ color: "black" }}  defaultValue={data.montantRetrait}  className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à tirer*</label>} name="montantRetrait"/>
                      <Input size="md"  style={{ color: "black" }}  defaultValue={formatteDate}  className="Input" variant="underlined" type="date" label={<label style={{ color: 'gray' }}>Date*</label>} name="dateRetrait"/>
                      </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Non
                  </Button>
                  <Button color="primary" type="submit" onPress={()=>{RecupIdRetrait(data.numeroRetraits).then(()=>{location.reload()}),onClose()}}>
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
