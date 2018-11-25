import React from 'react';
import Child from './child';
const parent=(props)=>{
        return (
            <div>
              <Child doWhatyou={props.changeName} title={props.title}/> 
              <Child doWhatyou={props.changeNumbers} title={props.title}/> 
            </div>
        );
    }


export default parent;