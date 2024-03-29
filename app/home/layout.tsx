import Menu from "../Composants/Menu";
 import { Avatar, AvatarIcon, Divider, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSlash} from '@fortawesome/free-solid-svg-icons';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Menu/>
      </div>
      <div className="w-screen h-full flex flex-col gap-3 p-5">
        <div className="flex flex-row gap-5 items-center justify-end"> 
          <div className="flex flex-row gap-5 items-center">
            <Avatar icon={<AvatarIcon/>} isBordered color="success" size="sm"/>
            <p>User</p>
          </div>
          <Divider orientation="vertical" style={{background:"gray"}} className="light"/>
          <Tooltip color="primary" content="Déconnexion">
            <FontAwesomeIcon icon={faUserSlash} width={35} height={35}/>
          </Tooltip>
        </div>
        <Divider orientation="horizontal" style={{background:"gray"}} className="light"/>
        {children}
      </div>
    </div>
  );
}