import {Hero} from "../../assets/images"

function Footer(){
    return(
        <footer className="bg-contain bg-no-repeat absolute bottom-0 w-full">
            <img className="w-full" src={Hero} alt=""/>
        </footer>
    )
}

export default Footer