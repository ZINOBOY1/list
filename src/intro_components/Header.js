const Header = ({xyz,user,age,mo,balance}) => {

    const rowstyle = {
        border:"1px solid red",
        minHeight:"100px",
        color:"blue"
    }  
    return(
        <div className="row" style={rowstyle}>
            <div className="col text-center">
                <h1>Header</h1>
                <p>Your account balance is {balance}</p>
                {
                    mo.map((m,index)=>(<span key={index}> {m} |</span>))
                }
            </div>
        </div>
    )
}
export default Header;