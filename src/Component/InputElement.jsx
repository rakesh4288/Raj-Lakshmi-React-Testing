import React from "react";
import { useState } from 'react';

const InputElement = () => {
    const [userAddress, setUserAddress] = useState('');
    return (
        <div>
            <div>
            <input type='text' placeholder='Enter user Name' value="Rakesh Shah" readOnly name="userName" id="userId" data-testid="userId" />
            </div>

            <div>
            <input type='text' placeholder='Enter Your Address' name="userAddress" id="userAddress" value={userAddress} onChange={(e)=> setUserAddress(e.target.value)} data-testid="userAddress"/>
            </div>
        </div>
    )
}

export default InputElement;