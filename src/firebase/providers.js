import { GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup(firebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );

        console.log(credentials)
        // const { displayName, email, photoURL, uid } = result.user;
        
        // return {
        //     ok: true,
        //     // User info
        //     displayName, email, photoURL, uid
        // }
        

    } catch (error) {

        console.log(error)
        
        // const errorCode = error.code;
        // const errorMessage = error.message;
    
        // return {
        //     ok: false,
        //     errorMessage,
        // }
    }

}