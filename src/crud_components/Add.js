import { useState } from "react";

const Add = ({addNewList}) =>{
    const [data,setData] = useState({
        id: Date.now(),
        name:"",
        price:""
    })

    const handleformsubmission = (event) =>{
        event.preventDefault();
        setData({...data, id:Date.now()});
        console.log(data)
        addNewList(data)
        // clear the input
    }




    return(
        <div className="row justify-content-center pb-5">
            <div className="col-md-8 pb-5">
               <div className="row">
                    <div className="col">
                        <h1 className="text-center"> Add shopping cart</h1>
                    </div>
                </div> 
               
            </div>
            <div className="row">
                <div className="col-">
                    <form className="bg-primary p-4" onSubmit={handleformsubmission}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="product Name" value={data.name}
                                 onChange={(event)=>{
                                    setData({...data,name:event.target.value})
                                 }} />
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="price" value={data.price} onChange={(event)=>{
                                     setData({...data,price:event.target.value})
                                }}
                                />
                            </div>
                            <div className="col-md-3">
                                <input type="submit" className="btn btn-success" value="Add to list"/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Add;