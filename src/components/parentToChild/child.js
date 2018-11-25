import React from 'react';
const child=(props)=>{

        return (
            <div>
                <button onClick={props.doWhatyou}>{props.title}</button>
            </div>
        );
    
}

export default child;