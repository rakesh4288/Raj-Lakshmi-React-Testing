const MultipleElementsCustomRole = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                    <div className="alert alert-info">
                        <h6>Multiple Elements and Custom Role</h6>
                        <button className="btn btn-success btn-sm">Get Details</button> <br/> <br/>
                        <button className="btn btn-success btn-sm">Registration</button>

                        <br/> <br/>
                        <div>
                            <p> By using data-testid: we can find this element and perform the testing</p>
                            <input type="text" data-testid="userName" /> <br/>
                            <input type="text" data-testid="userCity" />
                        </div>

                        <div>
                            <p>
                                And another approach is that - we can use the htmlFor element with label element <br/>    
                            </p>

                            <p>
                                <label htmlFor="studentName">Student Name</label> <br/>
                                <input type="text" id="studentName" /> <br/>
                                <label htmlFor="studentCity">Student City</label> <br/>
                                <input type="text" id="studentCity" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                    
                </div>
            </div>
        </div>
    )
}

export default MultipleElementsCustomRole;