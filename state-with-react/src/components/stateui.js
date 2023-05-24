import React, {useState}  from 'react';
import Counter from './counter';
import Report from './report';

function StateUI(){
    //raised state to be able to share across components
    const [count, setCount] = useState(0);
    return(
        <>
            <Counter count={count} setCount={setCount}/>
            <hr />
            <Report count={count}/>
        </>
    )
}

export default StateUI;