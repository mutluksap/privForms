import Google from "../assets/images/google.png"
import {Link} from "react-router-dom";
import {config} from "../Config";
import {useSignInWithGoogle, useAuthState} from "react-firebase-hooks/auth";
import {getAuth} from "@firebase/auth";
import Dashboard from "./Dashboard";
import Loading from "../components/Loading";

function Login(){
    const auth = getAuth(config);
    const [user, loading] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
        if(loading){
            return (
               <Loading/>
            )
        }

        if(!user){
            return (
                <div className="bg-gradient-to-r from-indigo-100 to-blue-200 h-full w-full flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg shadow-indigo-300/50 flex flex-col">
                        <div className="text-center mb-4">
                            <Link className="text-3xl font-bold italic text-pink-900" to="/">PrivForms</Link>
                        </div>
                        <button onClick={() => signInWithGoogle()} className="p-3 font-bold bg-amber-100 rounded overflow-hidden mb-2 flex items-center w-96 flex items-center justify-center">
                            <img className="w-8 mr-2" src={Google} alt=""/>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            )
        }
        if(user){
            return (
                <Dashboard user={user}/>
            )
        }

}

export default Login;