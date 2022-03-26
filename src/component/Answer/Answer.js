import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div>
            
            <div>
                <h2 className='answer'>ANSWER</h2>
              <h4>Questions:How to react work</h4>
              <h5>Ans:<small> React creates a virtual dome in Crete with the original dome.We see the original DOM. Virtual DOM is not a show. If you want to make any changes to JavaScript,React checks the original DOM with JavaScript's virtual DOM and then changes it to the original DOM.</small></h5>
            </div>

            
            <div>
            <h4 >Questions:Props Vs State</h4>
              <h5>Ans:1.<small>Props are read only and state change can be asynchronouse.</small></h5>
              <h5>Ans:2.<small>Props can not be modified and state can be modified using this.setState.</small></h5>
            </div>

            
            <div>
            <h4>Questions:How use state work</h4>
              <h5>Ans:<small>A special function is used to declare a state. This function is called a hook.An initial value is set for this in Usestate. Variable declaration [] is to be written in State and setState.State gives value and useState set value</small></h5>
            </div>
        </div>
    );
};

export default Answer;