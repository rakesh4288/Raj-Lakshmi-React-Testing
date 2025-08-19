import { useState } from 'react';
import handleOtherMethod from './Helper';

const FunctionTesting = () => {
    const [city, setCity] = useState("Pune India");
    const handleCity = () => {
        setCity("Phoenix, USA");
    }
    return (
        <div className='alert alert-primary'>
            <h5>Function Component Method Testing:</h5>
            <button className='btn btn-info btn-sm' data-testid="btn1" onClick={handleCity}>Change City</button>
            <h4>{city}</h4>

            <button data-testid="btn2" onClick={handleOtherMethod}>Checking other method</button>
            <br/><br/><br/>
        </div>
    )
}

export default FunctionTesting;