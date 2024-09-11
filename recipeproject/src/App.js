import Nav from "./recipe_components/Nav";
import Banner from "./recipe_components/Banner";
import List from "./recipe_components/List";
import Footer from "./recipe_components/Footer";
import Copy from "./recipe_components/Copy";
import { useEffect,useState } from "react";
import axios from "axios";


const RecipeApp = () =>{
  const [loading, setLoading]=useState(true)
  const [error,setError] = useState(false)
  const [recipes,setRecipes] = useState([])
  const [keyword,setKeyWord] = useState('')
  const [Frecipe, setfrecipe] = useState([])

  useEffect(()=>{
    makeApiCall()
  },{})


  //this function will do the filtering
  const handleFilter = ()=>{
    const filtered_recipes = recipes.filter((recipe)=>{
      return recipe.name.toLowerCase().includes(keyword.toLowerCase())
    })
    setfrecipe(filtered_recipes)

  }
  

  function makeApiCall(){
    axios.get('https://dummyjson.com/recipes')
    .then(function(resp){
      console.log(resp.data.recipes)
      setLoading(false)
      setRecipes(resp.data.recipes)
    })
    .catch(function(err){
      console.log(err)
      setLoading(false)
      setError(true)
    })

  }


    return(
        <div className="Container-fluid">
          <Nav/>
          <Banner setKeyWord={setKeyWord} keyword={keyword} handleFilter={handleFilter}/>
          <List loading={loading} error={error} recipes={recipes} Frecipe={Frecipe} keyword={keyword}/>
          <Footer/>
          <Copy/>
        </div>
       
    )
}
export default RecipeApp;