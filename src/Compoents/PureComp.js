import React from 'react'

const PureComp = () => {
    function add(a,b){
     let total= a+b;
        return total
    }
    var x=10
    function adds(){
        let totals= x++;
        console.log(totals)
    }
    function handleInput(){
        console.log(add(10,5))
        console.log(add(10,5))
    }
    function handleInputs(){
        adds(5)
        adds(5)
    }
    return (
        <div>
            <h1>PureComp and ImpureComp</h1>
            <button onClick={handleInput}>PureComp</button>
            <button onClick={handleInputs}>ImpureComp</button>
        </div>
    )
}

export default PureComp
