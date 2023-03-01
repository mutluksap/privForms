import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {formImage} from "../assets/images";
function Home(){
    return(
        <div className="bg-gradient-to-r from-indigo-100 to-blue-200 h-full">
            <Header/>
                <div className="container mx-auto py-3.5 flex justify-center text-center items-center flex-col w-full md:w-3/5">
                    <div className="font-bold text-center text-pink-900 text-2xl md:text-4xl">
                        Create Private Form & Publish
                    </div>
                    <img className="w-[65%]" src={formImage} />
                </div>
            <Footer/>
        </div>
    )
}

export default Home;