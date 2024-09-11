const Dashboard = ({isLogin,loginFunc,logoutFunc}) => {
    if (isLogin){
        return(
            <div className="row">
                <h1>You are logged in</h1>
                <button className="btn btn-danger" onClick={() =>{logoutFunc()}}>Logout</button>
            </div>
        )
    }else{
        return(
            <div className="row">
                <h1>Please login to see the Dashboard</h1>
                <button className="btn btn-primary" onClick={() =>{loginFunc()}}> Login Now</button>
            </div>
        )
    }
}
export default Dashboard;