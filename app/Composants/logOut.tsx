"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Tooltip} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSlash} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
export default function Logout() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter();
    const Logout = ()=>
        {
            localStorage.removeItem('token');
            router.push('/singnUp');
        }
    return (
      <>
        <Button onPress={onOpen} size="sm" isIconOnly={true} style={{background:"none"}}>
        <Tooltip color="primary" content="Déconnexion">
              <FontAwesomeIcon icon={faUserSlash} color="black" width={35} height={35} />
        </Tooltip>
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader></ModalHeader>
                <ModalBody>
                 <div className="flex flex-col items-center gap-4">
                        <FontAwesomeIcon icon={faUserSlash} color="black" width={100} height={100}/>
                        <p className="text-black">Voulez-vous déconnecter ?</p>
                 </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Non
                  </Button>
                  <Button color="primary" onPress={Logout}>
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