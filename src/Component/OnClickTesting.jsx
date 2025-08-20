import React from "react";
import { useState } from 'react';

const OnClickTesting = () => {
    const [data, setData] = useState('');
    const handleClick = () => {
        setData("Mr. Rakesh");
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <h3> {data}</h3>
        </div>
    )
}

export default OnClickTesting;