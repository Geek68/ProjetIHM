import Links from "./links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBank } from '@fortawesome/free-solid-svg-icons';
export default function Menu()
{
    return(<>
        <div className="h-full flex flex-col gap-20 py-8" style={{background:"#282828",borderBottomRightRadius:"20px",borderTopRightRadius:"20px",paddingLeft:"20px"}}>
            <div className="flex  items-start">
                <div className="flex flex-row gap-1 items-center">
                    <FontAwesomeIcon icon={faBank}  color="#A0C01A" width={45} height={45}/>
                    <h1 className="text-xl">MyBank</h1>
                </div>
            </div>
            <div className="flex items-center">
                <Links/>
            </div>
     </div>
    </>)
}