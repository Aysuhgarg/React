import React from "react";

class ClassBaseCompo extends React.Component{
    
    state={
        somenumber:2
    };
    render= ()=>{
        return(
            <div>
                <h1>{this.state.somenumber}</h1>
                <h1>This is class base component</h1>
                <p> This is a paragraph </p>
                <h2>For Learning</h2>
            </div>
        );
    };
}

export default ClassBaseCompo