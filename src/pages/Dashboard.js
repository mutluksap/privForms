import {Link} from "react-router-dom";
import ModalPopup from "../components/Modal.js";
import {config} from "../Config";
import {getAuth, signOut } from "@firebase/auth";
function Dashboard(){
    const auth = getAuth(config);
    const logout = () => {
        signOut(auth);
    }
    return(
        <>
            <header className="h-16 bg-gradient-to-r from-indigo-100 to-blue-200">
                <div className="container mx-auto py-3.5 flex justify-between w-3/5">
                    <Link to="/" className="text-3xl font-bold italic text-pink-900">
                        PrivForms
                    </Link>
                    <div className="flex items-center">
                        <div className="font-bold mr-2">
                            Hi, Mutlu Kasap
                        </div>
                        <button onClick={() => <ModalPopup/>} className="bg-emerald-600 p-2 rounded font-bold text-white mr-2">
                            Create User
                        </button>
                        <button onClick={logout} className="bg-red-800 p-2 rounded font-bold text-white">
                            SignOut
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Dashboard;