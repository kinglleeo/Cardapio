import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Firebase/base";

export default function deslogar(){

    const { logOut } = useUserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
      try {
        await logOut();
      } catch (error) {
        alert('error');
      }
    }
    return(
        <div>
            <button onClick={handleLogout} > Deslogar </button>
        </div>
    )
}