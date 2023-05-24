import React, {useState} from 'react';
import Button from '@mui/material/Button';

function Counter(props){
    
    /* 
    Having state here like:
        //const [count, setCount] = useState(0);    
    could work if the report component was here in this file
    also you can join the two state together as an object like:
        const [state, setState] = useState({
            count: 0,
            active: true
        })
    and we use dot notation to access the properties like state.count or state.active
    also when you use setCount you have to include the whole object then update the
    particular properties. like:
        onClick={() => {
            setState({...state, count: state.count+1})
        }}
    Hooks in React has an order it is stored and if you use custom Hooks it is
    recommended to keep your state separate because you may use it in your custom
    hook. Also note you can not conditionlise your custom hooks or useState like:
        if(true){
            const [someState, setSomeState] = useState(false);
        }
    */
    const [active, setActive] = useState(true);
    
    return(
        <div>
            <p>Counter</p>
            <p>
            <Button 
                disabled={!active}
                onClick={() => {props.setCount(props.count+1)}} 
                variant="contained">Count: {props.count}
            </Button>
            </p>
            <p>
            <Button
                onClick={() => setActive(!active )}
                variant="contained">
                {active ? 'Disable' : 'Enable'}
            </Button>
            </p>
           
        </div>

    )
}

export default Counter;