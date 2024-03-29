import AjoutClient from "../../clientComponent/ajoutclient/page"
import OtherInfo from "../../clientComponent/otherInfo/page"
import TableClient from "@/app/clientComponent/tableClient/page"
import Historique from "@/app/clientComponent/historique/page"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export default function Client()
{

    return(<>
        <div className="flex flex-col gap-4 justify-between h-full">
            <div className="flex flex-row justify-around items-center">
                <AjoutClient/>

                <OtherInfo/>
            </div>
            <div className="flex flex-row justify-around items-center">
                <TableClient/>
                <Historique/>
            </div>
            <ToastContainer />
        </div>
    </>)
}