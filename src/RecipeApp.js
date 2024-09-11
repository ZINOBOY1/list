import Nav from "./recipe_components/Nav";
import Banner from "./recipe_components/Banner";
import List from "./recipe_components/List";
import Footer from "./recipe_components/Footer";
import Copy from "./recipe_components/Copy";



const RecipeApp = () =>{
    return(
        <div className="Container-fluid">
          <Nav/>
          <Banner/>
          <List/>
          <Footer/>
          <Copy/>

        
        </div>
       
    )
}
export default RecipeApp;