import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./base";

export default function deslogar(){

    const { logOut } = useUserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log('error');
      }
    }
    return(
        <div>
            <button onClick={handleLogout} > Deslogar </button>
        </div>
    )
}