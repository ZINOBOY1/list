import { useContext } from "react";
import { listContext } from "../context/ListContext";

const Header = () =>{
    //how to consume context: useContext()= tell it the context you want to use
    const {lists} = useContext(listContext)
    


    return(
        <div className="row bg-primary text-light py-5" >
           <div className="col text-center">
                <h1 className="text-center "> Shopass</h1>
                <p>Your Shopping Assistant</p>
                <button type="button" class="btn btn-primary">
                List Item Count: <span class="badge text-bg-secondary"><strong> </strong></span>
                </button>
                <p> </p>
           </div>
        </div>
    )
}
export default Header;