"use client"
import Menu from "../Composants/Menu";
 import { Avatar, AvatarIcon, Divider, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSlash} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyContext from "../Composants/MyContext";
import ProtectedRoute from "../Composants/PotectedRoute";
import Logout from "../Composants/logOut";
import { useContext } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
 const {user} = useContext(MyContext)
 console.log(user)
  return (
      <ProtectedRoute>
         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden" style={{background:"#ECEFEF"}}>
              <div className="w-full flex-none md:w-64">
                <Menu/>
              </div>
              <div className="w-screen h-full flex flex-col gap-2 p-5" >
                <div className="flex flex-row gap-5 items-center justify-end"> 
                  <div className="flex flex-row gap-5 items-center">
                    <Avatar icon={<AvatarIcon/>} isBordered color="success" size="sm"/>
                    <p style={{color:"black"}}>
                      {
                        user !== undefined ?   (<span>{user.nomCaissier}</span>):(<span>User</span>) 
                      }
                    </p>
                  </div>
                  <Divider orientation="vertical" style={{background:"gray"}} className="light"/>
                  <Logout/>
                </div>
                <Divider orientation="horizontal" className="light px-10 flex flex-row"/>
                {children}
              </div>
            <ToastContainer
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"/>
          </div>
      </ProtectedRoute>
  );
}