import Reason from "./Reason";

const colorwhite={
    color:"white",
    textAlign:"center",
    padding:"20px 10px"

}

function WhyUs({reasons,username}){
    return(
        <>
            <div className="row whyus">
                <div className="col text-center pt-5">
                    <h1>WhyUs</h1>
                </div>
                <div className="row">
                    {
                        reasons.map((reasons,key)=>{
                            return(
                               <Reason reasons={reasons} colorwhite={colorwhite} username={username}/>
                            )
                        
                        })
                    }

                </div>
            </div>
        </>
        
    )

}

export default WhyUs;