import {getRedirectResult, GithubAuthProvider} from 'firebase/auth'
import { auth } from '../firebaseApi'

export const getAccessToken = () => getRedirectResult(auth).then(result => {
    if (result) {
        const credential = GithubAuthProvider.credentialFromResult(result)
        
        if (credential) {
            const token = credential.accessToken
        }
        
        const user = result?.user
    }
}).catch(error => {
    const errorCode = error.code
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
})