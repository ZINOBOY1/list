import Add from "./crud_components/Add";
import Header from "./crud_components/Header";
import Show from "./crud_components/Show";
import Footer from "./crud_components/Footer";
import { useState } from "react";

const CrudApp = () => {
    //called list
    //add list default here
    let defaultlist = [
        {
            id:1,
            name:"Iphone 15 promax",
            price:2500000
        },
        {
            id:2,
            name:"greek Yogurt Parfailt, 1l",
            price:30000
        },
        {
            id:3,
            name:"A box of dark chocolate",
            price:4000
        },
    ]
    
    const [lists, setlist] = useState(defaultlist);
    // a function that can add a new list to the list state

    const addNewList =(listDetail) => {

        setlist([...lists, listDetail]);
    }

// a function that accept an id, delete a list item with that id from the lists state

const deleteList = (id) => {
    let otherList = lists.filter( (list)=>{
        return list.id != id
    })
    setlist(otherList)
}
// function that clears all the items in the list 
const clearAllList = () => {
    setlist([])
}


    return(
        <div className="container-fluid">
            <Header list={lists}/>
             <Add addNewList={addNewList} />
             <Show lists={lists} deleteList={deleteList} clearAllList={clearAllList}/>
             <Footer/>
        </div>
      
    )
}
export default CrudApp;