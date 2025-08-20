import React from "react";

const GetByAllRolePage = () => {
    return(
        <div className="container">
            <div className="row">
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <h3>RTL Query: GetByAllRole</h3>
                    <ul>
                        <li>GetByAllRole is handling the multiple elements</li>
                        <li>Multiple buttons with the same role</li>
                        <li>Multiple Select options box with same role</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                    <button className="btn btn-info btn-sm">Click Me</button> &nbsp;&nbsp; 
                    <button className="btn btn-info btn-sm">Click Me</button> &nbsp;&nbsp;
                    <button className="btn btn-info btn-sm">Click Me</button> &nbsp;&nbsp;
                    <button className="btn btn-info btn-sm">Click Me</button> &nbsp;&nbsp;

                    <br/><br/>
                    <h6>Let's test the options from the select tag</h6>
                    <select className="form-select">
                        <option>Select City</option>
                        <option>Pune</option>
                        <option>Jabalpur</option>
                        <option>Indore</option>
                        <option>Bhopal</option>
                    </select>
                </div>

                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0tVIktX87Rw?si=0dqWu0ZZZAiSl-10" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default GetByAllRolePage;