const GetByLabelText = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <h5>getByLabelText</h5>
                    <ul>
                        <li>We can test input field with getByLabelText</li>
                        <li>And we cal also test checkbox which are associates with Label</li>
                    </ul>

                    <label htmlFor="user-name">Enter User Name</label>
                    <input type="text" id="user-name" defaultValue="Rakesh Shah" />

                    <br/>

                    <label htmlFor="user-skills">Enter User Skills</label>
                    <input type="checkbox" id="user-skills" defaultChecked={true} />
                </div>
            </div>
        </div>
    )
}

export default GetByLabelText;