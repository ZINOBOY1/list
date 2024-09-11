import xyz from "../img/pic1.jpg"
const stylerow ={
    color:"white",
    textAlign:"center"
}

function Services(){
    return(
        <>
        <div className="row  stylerow services">
           <div className="col">
             <h1 className="text-center">Our Services</h1>
           </div>
          </div>
          <div className="row services">
            <div className="col-md-4 p-4">
                <div className="bg-dark">
                    <h3 className="py-2" style={stylerow}>Service One</h3>
                    <img src={xyz} alt="an image" className="img-fluid" />
                    <p style={stylerow}>We provide this services here</p>
                </div>
            </div>
            <div className="col-md-4 p-4">
                <div className="bg-dark">
                    <h3 className="text-center py-2" style={stylerow}>Service One</h3>
                    <img src={xyz} alt="an image" className="img-fluid" />
                    <p style={stylerow}>We provide this services here</p>
                </div>
            </div>
            <div className="col-md-4 p-4">
                <div className="bg-dark">
                    <h3 className="py-2" style={stylerow}>Service One</h3>
                    <img src={xyz} alt="an image" className="img-fluid" />
                    <p style={stylerow}>We provide this services here</p>
                </div>
            </div>
            
          </div>
        
        </>
        
    )

}

export default Services;