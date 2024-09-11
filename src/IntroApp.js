import Header from "./intro_components/Header";
import Welcome from "./intro_components/welcome";
import WhyUs from "./intro_components/WhyUs";
import Services from "./intro_components/services";
import Footer from "./intro_components/footer";
import { useState } from "react";
import AlertSuccess from "./intro_components/AlertSuccess";
import AlertWarning from "./intro_components/AlertWarning";
import Dashboard from "./intro_components/Dashboard";

// importing css file
import "./intro.css";



const IntroApp = () =>{
   




    let username = "zino"
    let age = 23
    let stateoforigin = "Lagos State"
    let companyMotor = ["Honesty","Reliable","Engaging"]
    //why us has 3 things
    let whyus = [
        {
            id:1,
            title:"Honesty",
            desc:"We are honest like you",
            image:"/images/why1.jpg"
        },
        {
            id:2,
            title:"Reliable",
            desc:"We are Reliable like you",
            image:"/images/why2.jpg"
        },
        {
            id:3,
            title:"Engaging",
            desc:"We are engaging like you",
            image:"/images/why3.jpg"
        }
        
    ];
    let  accountbalance = 10000;
    const [balance,setBalance] = useState(50000)
    const [isLogin, setIsLogin] = useState(true)

    //change state to true
    const login = () =>{
        setIsLogin(true)

    }
    // change the state of is login to false

    const logout = () =>{
        setIsLogin(false)
    }
    return(
        <div className="container">
            <Header xyz = {stateoforigin} user = {username} age = {age} mo={companyMotor} balance={balance}/>
            <Welcome user = {username} age = {age} balance={balance}/>
            <Services/>
            <WhyUs  reasons={whyus} username={username}/>
            <Footer/>

            <div className="container">
                <div className="col-md-6">
                {   
                     balance <50000 ? <p> <AlertWarning/> </p> : <p> <AlertSuccess/> </p>
                }
                    <div className="d-flex">
                    <button className="btn btn-primary"onClick={ ()=> {
                        setBalance(balance+1000)
                        console.log(accountbalance)


                    }} > Deposit</button>
                    <p className="px-5"> {balance}</p>
                  
                    <button className="btn btn-success" onClick={ ()=> {
                             setBalance(balance-1000)
                             console.log(accountbalance)
     

                    }}> withdraw</button>

                    </div>
                    

                </div>
            </div>
            <Dashboard isLogin={isLogin} loginFunc={login} logoutFunc={logout}/>
        </div>
    )

}
export default IntroApp;