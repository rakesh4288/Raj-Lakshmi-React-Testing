import { useState } from 'react';

const InputElement = () => {
    const [userAddress, setUserAddress] = useState('');
    return (
        <div className="container">
            <div className="row">
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                    <h4>Form Input Element</h4>
                    <div>
                        <input type='text' placeholder='Enter user Name' value="Rakesh Shah" readOnly name="userName" id="userId" data-testid="userId" />
                    </div>
                    
                    <br/>
                    
                    <div>
                        <input type='text' placeholder='Enter Your Address' name="userAddress" id="userAddress" value={userAddress} onChange={(e)=> setUserAddress(e.target.value)} data-testid="userAddress"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputElement;