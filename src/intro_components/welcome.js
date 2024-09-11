function Welcome(props){
    console.log(props)
    return(
        <div className="row welcome pt-5">
            <div className="col text-center pt-5">
                <h1>Welcome Section</h1>
                <p>Your account balance is {props.balance}</p>
                <p>Welcome {props.user}, you are {props.age} years old </p>

            </div>
        </div>
    )

}

export default Welcome;