"use client";

import { NextPage } from "next";
import { useState } from "react";
import Child from "./Child";

const Index:NextPage = () => {
    
    const [number, setNumber] = useState(0);

    return(
        <>
            <p>{number}</p>
            <input type="button" value="Button" onClick={() => setNumber(number + 1)} />
            <Child />
        </>
    );
};

export default Index;