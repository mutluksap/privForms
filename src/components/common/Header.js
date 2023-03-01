import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="h-20">
            <div className="container mx-auto py-3.5 flex justify-between w-full px-4 md:w-3/5 md:px-0">
                <Link to="/" className="text-3xl font-bold italic text-pink-900">
                    PrivForms
                </Link>
                <Link to="/login" className="bg-pink-900 text-white rounded-lg p-3 font-bold">
                    Get Started
                </Link>
            </div>
        </header>
    )
}
export default Header;