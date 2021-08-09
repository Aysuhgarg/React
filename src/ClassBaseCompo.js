import React from "react";

class ClassBaseCompo extends React.Component{
    
    state={
        somenumber:0
    };
    render= ()=>{
        return(
            <div>
                <button onClick={ ()=> {
                    this.setState({somenumber:this.state.somenumber+1});
                } } 
                > 
                Increment</button>

                <button onClick={ ()=>{
                    this.setState({somenumber:this.state.somenumber-1})
                }
                }>
                    Decrement
                </button>

                <h1>{this.state.somenumber}</h1>
            </div>
        );
    };
}

export default ClassBaseCompo