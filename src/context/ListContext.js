import { createContext } from "react"
import { useState } from "react";
// create your context 


const listContext = createContext();

// create a provider
    // a component, knows everything that has to do with list
    //inside
        // state
        //methods to manipulate the state
        //return something

const ListProvider = ({children})=>{
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
    const clearAllList = () => {
        setList([])
    }
    const deleteList = (id) => {
        let otherList = lists.filter( (list)=>{
            return list.id != id
        })
        setList(otherList)

    }
    const [lists,setList] = useState(defaultlist);
    const addNewList =(listDetail) => {

    setList([...lists, listDetail]);

    
}

return(
    <listContext.Provider value={{addNewList,deleteList,clearAllList,lists}}>{children}</listContext.Provider>
)
}
export {listContext,ListProvider}
