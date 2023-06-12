
import { db } from '../Firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

export const addNewUserDocument = async (user) =>{
    try {
      const userRed = addDoc (collection(db, "usuario"),{
        email: user.email
      })
    }
    catch (error) {
      console.error(error)
    }
}

