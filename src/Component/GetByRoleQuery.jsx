const GetByRoleQuery = () => {
    return (
        <div className="alert alert-success">
            <h5>GetByRoleQuery</h5>
            <h6>What is the Role in gteByRole?</h6>

            <h6>What is sementic elements ?</h6>
            <ul>
                <li>Buttons, headings tags and tables are sementic element</li>
                <li>Div and span are not sementic elements</li>
            </ul>

            <h6>Test textbox with getByRole</h6>
            <ul>
                <li>textbox present or not</li>
                <li>textbox value</li>
                <li>text box disabled or not</li>
            </ul>

            <input type="text" defaultValue="Rakesh" disabled /> <button>Test</button>

            <h6>Always follow three steps:</h6>
            <ul>
                <li>1: Need to render the component first using the render method</li>
                <li>2: Then find the element using getBy queries</li>
                <li>3: Finally check the content or element or whatever your requirements</li>
            </ul>
        </div>
    )
}

export default GetByRoleQuery;