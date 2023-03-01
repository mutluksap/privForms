import {Link} from "react-router-dom";
import {config} from "../Config";
import {getAuth, signOut } from "@firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../redux/slices/Modal";

function Dashboard({user}){
    const auth = getAuth(config);

    const dispatch = useDispatch();

    const logout = () => {
        signOut(auth);
    }
    const modalState = useSelector((state) => state.open );
    const modal = (state) => {
        console.log(modalState)
        dispatch(openModal(!state));
    }

    return(
        <>
            <header className="h-16 bg-gradient-to-r from-indigo-100 to-blue-200">
                <div className="container mx-auto py-3.5 flex justify-between w-3/5">
                    <Link to="/" className="text-3xl font-bold italic text-pink-900">
                        PrivForms
                    </Link>
                    <div className="flex items-center">
                        <div>
                            <img className="w-9 rounded-full mr-2" src={user.reloadUserInfo.photoUrl} alt={user.displayName}/>
                        </div>
                        <div className="font-bold mr-2">
                            Hi, {user.displayName}
                        </div>
                        <button onClick={() => modal(!modalState)} className="bg-emerald-600 p-2 rounded font-bold text-white mr-2">
                            Create User
                        </button>
                        <button onClick={logout} className="bg-red-800 p-2 rounded font-bold text-white">
                            SignOut
                        </button>
                    </div>
                </div>
            </header>
            <div className="container mx-auto py-3.5 flex justify-center w-3/5">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Surname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard;