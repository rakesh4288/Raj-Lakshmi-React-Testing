import { useState } from 'react';
import handleOtherMethod from '../Component/Helper';

const FunctionTesting = () => {
    const [city, setCity] = useState("Pune India");
    const handleCity = () => {
        setCity("Phoenix, USA");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='alert alert-primary'>
                        <h5>Function Component Method Testing:</h5>
                        <button className='btn btn-info btn-sm' data-testid="btn1" onClick={handleCity}>Change City</button>
                        <h4>{city}</h4>

                        <button data-testid="btn2" onClick={handleOtherMethod}>Checking other method</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunctionTesting;