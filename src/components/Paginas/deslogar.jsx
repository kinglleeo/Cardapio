import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Usuarios/base";

export default function deslogar(){

    const { logOut } = useUserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
      try {
        await logOut();
        redirect("/");;
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