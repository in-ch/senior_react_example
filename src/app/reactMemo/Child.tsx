import React, { useState } from "react";

const expensiveCalculation = (num:number) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
 };

const Child = () => {
    const [value] = useState(expensiveCalculation(0));
    return (
        <>
            <p>CHILD: {value}</p>
        </>
    );
};
export default React.memo(Child);
// export default Child;
