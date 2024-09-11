import Add from "./crud_components_Context/Add";
import Header from "./crud_components_Context/Header";
import Show from "./crud_components_Context/Show";
import Footer from "./crud_components_Context/Footer";
import { useState } from "react";

const CrudAppC = () => {
    

    return(
        <div className="container-fluid">
            <Header/>
             <Add/>
             <Show/>
             <Footer/>

            
        </div>
      
    )
}
export default CrudAppC;