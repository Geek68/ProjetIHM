"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip,Input,Select,SelectItem} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';
import { Rembourse} from "@/lib/donnneePret";
import { DonneeClient } from "@/app/clientComponent/tableClient/dataClient";
export default function Remboursement({data}:{data:object}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const NumComptes =DonneeClient()
  return (
    <>
      <Button onPress={onOpen} size="sm" isIconOnly={true} style={{background:"none"}}>
      <Tooltip color="primary" content="Remboursement">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <FontAwesomeIcon icon={faHandHoldingDollar}  className="ICONS" color="gray" width={20} height={20}/>
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
              <ModalHeader className="flex flex-col gap-1 text-xl text-green-400">Remboureser le prêt</ModalHeader>
             <form action={Rembourse}>
             <ModalBody className="flex flex-row justify-center" >
                    <div className="flex flex-col gap-4 w-4/5 ">
                    <Select
                    items={NumComptes}
                    label="Numero Compte"
                    placeholder="Choisir le compte"
                    labelPlacement="outside"
                    defaultSelectedKeys={[data.numeroCompteEmprunteur]}
                    name="numCompte"
                    >
                        {
                            (numero)=>(
                              <SelectItem key={numero.numeroCompte} style={{color:'gray'}} textValue={numero.numeroCompte}>
                                      {numero.nomClient} {numero.prenomsClient}
                              </SelectItem>
                            )
                        }
                    </Select>
                    <Input size="md"  style={{ color: "black" }}  value="2285" className="Input " variant="underlined" type="text" label={<label style={{ color: 'gray' }}>Bank</label>} name="bank"/>
                    <Input size="md"  style={{ color: "black" }} defaultValue={data.numeroPret} className="Input " variant="underlined" type="" label={<label style={{ color: 'gray' }}>Nuremo du Prêt*</label>} name="numeroPret"/>
                    <Input size="md"  style={{ color: "black" }}  className="Input " variant="underlined" type="number" label={<label style={{ color: 'gray' }}>Montant à Payer</label>} name="montantPayer"/>
                    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Non
                </Button>
                <Button color="primary" type="submit" onPress={()=>{location.reload(),onClose()}} >
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
