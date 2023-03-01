import Google from "../assets/images/google.png"
import Github from "../assets/images/github.png"
import {Link} from "react-router-dom";
import {config} from "../Config";
import {useSignInWithGoogle, useSignInWithGithub, useAuthState} from "react-firebase-hooks/auth";
import {getAuth} from "@firebase/auth";
import Dashboard from "./Dashboard";

function Login(){
    const auth = getAuth(config);
    const [user, loading] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    console.log(user)
        if(loading){
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                         fill="red" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            )
        }

        if(!user){
            return (
                <div className="bg-gradient-to-r from-indigo-100 to-blue-200 h-full w-full flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg shadow-indigo-300/50 flex flex-col">
                        <div className="text-center mb-4">
                            <Link className="text-3xl font-bold italic text-pink-900" to="/">PrivForms</Link>
                        </div>
                        <button onClick={() => signInWithGoogle()} className="p-3 font-bold bg-amber-100 rounded overflow-hidden mb-2 flex items-center">
                            <img className="w-8 mr-2" src={Google} alt=""/>
                            Sign in with G❤️💚gle
                        </button>
                        <button onClick={() => signInWithGithub()} className="p-3 font-bold bg-amber-100 rounded overflow-hidden flex items-center">
                            <img className="w-8 mr-2" src={Github} alt=""/>
                            Sign in with Github
                        </button>
                    </div>
                </div>
            )
        }
        if(user){
            return (
                <Dashboard/>
            )
        }

}

export default Login;