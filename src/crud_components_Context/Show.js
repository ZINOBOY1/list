import { useContext } from "react"
import { listContext } from "../context/ListContext"


const Show = () =>{



    const {deleteList,lists,clearAllList} = useContext(listContext)

    const stylebox = {
        justifyContent:"space-between",
        alignItems: "center"
    }

    const firstp = {
        flex:4
    }
    const others ={
        flex:1
    }

    return(
        <div className="row justify-content-center bg-primary text-light py-5">
            <div className="col">
                <div className="row">
                    <div className="col text-center">
                        <h1> Shopping List</h1>
                        <button className="btn btn-danger" onClick={clearAllList}> clear all list</button>
                    </div>
                </div>
                <div className="row justify-content-center pt-3">
                    <div className="col-8">
                    <ul class="list-group">
                        {
                            lists.length>0 ? lists.map(function(list){
                                return(
                                    <li key={list.id} class="list-group-item">
                                        <div className="d-flex list-box" style={stylebox}>
                                        <p style={firstp}>{list.name}</p>
                                        <p style={others}> {list.price}</p>
                                        <button  className="btn btn-danger" onClick={()=>{
                                            deleteList(list.id)
                                        }}>X</button>
                                        </div>
                                    </li>
                                )
                            }) : <p> No item found </p>
                        }
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Show;