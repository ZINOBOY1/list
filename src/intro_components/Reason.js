const Reason =({reasons,username}) =>{
    return(
        <div className="col-md-4 mb-4" key={reasons.id}>
            <div className="card">
                 <img src={reasons.image} className="card-img-top img-fluid" alt=""/>
                    <div className="card-body text-center">
                     <h5 className="card-title">{reasons.title}</h5>
                     <p className="card-text">{reasons.desc}</p>
                     <p>Your username is {username}</p>
                    </div>
                </div>
            </div>

    )

}

export default Reason;